import React from 'react';
import { connect } from 'react-redux';
import Style from './style.Module.css';
import Swiper from '../../component/Swiper';
import Card from '../../component/Card';
import Avatar from '../../component/avatar';
import PlayBtn from '../../component/playBtn';
// import SmallPlayBtn from '../../component/SmallPlayBtn';
import { getPopularList } from '../../../../request/requests/musicRequest';
import {
  createChangeMusicAction,
  createPlayMusicAction,
} from '../../../../store/music/music_action';

class MainBody extends React.Component<any, any> {
  private imgs: any;

  private imgs1: any;

  constructor(props: any) {
    super(props);
    this.state = {
      barStyle: { right: '20px', opacity: '0', transition: 'opacity 1s' },
      allMusic: [],
    };
    this.imgs = [
      { src: '/swiper/1.jpg' },
      { src: '/swiper/2.jpg' },
      { src: '/swiper/3.jpg' },
      { src: '/swiper/1.jpg' },
    ];
    this.imgs1 = [
      { src: '/swiper/4.jpg' },
      { src: '/swiper/5.jpg' },
      { src: '/swiper/6.jpg' },
      { src: '/swiper/4.jpg' },
    ];
  }

  componentDidMount() {
    this.getAllMusic();
  }

  async getAllMusic() {
    const res = await getPopularList();
    this.setState({ allMusic: res.data });
  }

  onMouseLeave = () => {
    this.setState({
      barStyle: { right: '20px', opacity: '0', transition: 'opacity 1s' },
    });
  };

  clickToPlayMusic = (item: any) => {
    // console.log(this.props, item);
    const { changeMusic, playMusic } = this.props;
    changeMusic(item);
    setTimeout(() => playMusic(), 1000);
  };

  onMouseMove = () => {
    this.setState({
      barStyle: { right: '20px', opacity: '1', transition: 'opacity 1s' },
    });
  };

  render() {
    const { barStyle, allMusic } = this.state;
    return (
      <div className={Style['main-body']}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Swiper imgs={this.imgs} />
          <Swiper imgs={this.imgs1} />
        </div>
        <Card backgroundColor="rgba(0,0,0,0.5)">
          <Avatar top="10px" right="20px">
            <img
              className={Style.image}
              src="/myStatic/pika.jpg"
              alt="图片加载错误"
            />
          </Avatar>
          <PlayBtn top="20px" left="30px" />
          <div className={Style.box}>
            <i className="iconfont">&#xe6a2;</i>
          </div>
          <div className={Style.box} style={{ left: '194px' }}>
            <i className="iconfont">&#xe6e9;</i>
          </div>
          <div className={Style.box} style={{ left: '228px' }}>
            <i className="iconfont">&#xe6eb;</i>
          </div>
        </Card>
        <Card
          width="400px"
          height="400px"
          top="-160px"
          left="333px"
          backgroundColor="rgba(0,0,0,0.2)"
        >
          <div className={Style.title}>流行音乐</div>
          <div style={{ marginTop: '30px' }}>
            {allMusic.map((item: { name: any; picture: any }) => {
              return (
                <div
                  className={Style.bar}
                  key={item.picture}
                  onClick={() => this.clickToPlayMusic(item)}
                >
                  <Avatar top="10px" left="20px" width="30px" height="30px">
                    <img
                      className={Style.image}
                      src={item.picture}
                      alt="图片加载错误"
                    />
                  </Avatar>
                  <div className={Style.musicDesc}>{item.name}</div>
                  {/* <SmallPlayBtn
                style={barStyle}
                playing
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
              /> */}
                </div>
              );
            })}
          </div>
        </Card>
        <Card
          width="300px"
          height="230px"
          top="-400px"
          left="0"
          backgroundColor="rgba(0,0,0,0.2)"
        >
          <div
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              position: 'relative',
              top: '10px',
              left: '20px',
            }}
          >
            播放列表
          </div>
          <ul style={{ position: 'relative', top: '30px' }}>
            {allMusic.map((item: any) => {
              return (
                <li
                  key={item.id}
                  className={Style.musicItem}
                  onClick={() => this.clickToPlayMusic(item)}
                >
                  <span>{`0${item.id}`}</span>
                  <span>{item.name}</span>
                  <span>03:32</span>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { musicInfo: state.music_reducer.musicInfo };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeMusic(data: any) {
      dispatch(createChangeMusicAction(data));
    },
    playMusic() {
      dispatch(createPlayMusicAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
