import React, { createRef } from 'react';
import { connect } from 'react-redux';
import Style from './style.module.css';
import { getLrc } from '../../../../request/requests/musicRequest';
import createChangeMusicStateAction from '../../../../store/music/music_action';

class Playing extends React.Component<any, any> {
  private ulRef: any;

  private int: any;

  constructor(props: any) {
    super(props);
    this.state = { lrc: { lrc: [] }, top: 0, index: 0 };
    this.ulRef = createRef();
    this.int = '';
  }

  async componentDidMount() {
    const res: any = await getLrc();
    res.lrc = res.lrc.split('\n');
    res.lrc.forEach((item: string, index: number, arr: Array<any>) => {
      const i = item.indexOf(']') + 1;
      const time = item.substring(0, i);
      const min = parseInt(time.substring(1, 3), 10);
      const sec = parseInt(time.substring(4, 6), 10);
      const currentTime = min * 60 + sec;
      const trueLrc = item.substring(i, item.length);
      arr[index] = { currentTime, trueLrc };
    });
    res.lrc = res.lrc.filter((item: any) => {
      return item.trueLrc.length !== 0;
    });
    this.setState({ lrc: res });
  }

  moveUl = () => {
    clearInterval(this.int);
    const { top, index, lrc } = this.state;
    const { currentTime } = this.props;
    if (index + 1 >= lrc.lrc.length) return;
    if (currentTime >= lrc.lrc[index + 1].currentTime) {
      this.ulRef.current.style.top = `${top - 60}px`;
      this.setState({ top: top - 50, index: index + 1 });
    }
  };

  render() {
    const { lrc, index } = this.state;
    this.int = setInterval(() => this.moveUl(), 100);
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className={Style.box}>
        <div className={Style.lrcBox}>
          <ul ref={this.ulRef}>
            {lrc.lrc.map((item: any, i: number) => {
              return (
                <li
                  className={Style.lrcWord}
                  key={item.trueLrc}
                  style={
                    index === i
                      ? { color: 'black', fontWeight: 'bold', fontSize: '20px' }
                      : { fontSize: '15px' }
                  }
                >
                  {item.trueLrc}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { currentTime: state.music_reducer.currentTime };
};

const mapDispatchToProps = (dispath: any) => {
  return {
    changeCurrentTime(data: any) {
      dispath(createChangeMusicStateAction(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playing);
