import React, { createRef } from 'react';
import Style from './style.module.css';
import '../../../../../assets/font/iconfont.css';
import SmallPlayBtn from '../../component/SmallPlayBtn';
import Volume from '../../component/Volume';
// eslint-disable-next-line import/order
import { connect } from 'react-redux';
import createChangeMusicStateAction from '../../../../store/music/music_action';
import Avatar from '../../component/avatar';

class Footer extends React.Component<any, any> {
  private audioRef: any;

  private int: any;

  constructor(props: any) {
    super(props);
    this.audioRef = createRef();
    this.int = '';
    this.state = { playing: true, progressBarWidth: 0, volumeBarWidth: 50 };
  }

  moveProgressBar = () => {
    clearInterval(this.int);
    this.int = setInterval(() => {
      const { currentTime, duration } = this.audioRef.current;
      const { changeCurrentTime } = this.props;
      changeCurrentTime(currentTime);
      const props = (currentTime / duration) * (window.innerWidth - 200);
      this.setState({ progressBarWidth: props });
    }, 10);
  };

  clickToPlay = () => {
    const { playing, volumeBarWidth } = this.state;
    this.setState({ playing: !playing });
    this.audioRef.current.volume = volumeBarWidth / 100;
    if (playing) {
      this.audioRef.current.play();
      this.moveProgressBar();
    } else this.audioRef.current.pause();
  };

  clickToMove = (e: any) => {
    const { duration } = this.audioRef.current;
    this.audioRef.current.currentTime =
      duration * ((e.clientX - 200) / (window.innerWidth - 200));
    this.audioRef.current.play();
    this.setState({ playing: false });
    this.moveProgressBar();
  };

  dragToMoveVolume = () => {
    document.onmousemove = (mouseEvent) => {
      let width = mouseEvent.clientX - 400;
      width = width > 100 ? 100 : width;
      this.setState({ volumeBarWidth: width });
      this.audioRef.current.volume = width / 100 > 1 ? 1 : width / 100;
    };
    document.onmouseup = () => {
      document.onmousemove = () => {};
    };
  };

  dragToMove = () => {
    document.onmousemove = (mouseEvent) => {
      clearInterval(this.int);
      const width = mouseEvent.clientX - 200;
      this.setState({ progressBarWidth: width });
    };
    document.onmouseup = () => {
      document.onmousemove = () => {};
      this.moveProgressBar();
    };
  };

  render() {
    const { playing, progressBarWidth, volumeBarWidth } = this.state;
    return (
      <div className={Style.footer}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={Style.progressBar} onClick={this.clickToMove}>
          <div
            className={Style.innerProgressBarLeft}
            style={{ width: `${progressBarWidth}px` }}
          >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className={Style.smallBall} onMouseDown={this.dragToMove} />
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio src="/music/example.mp3" ref={this.audioRef}>
          <source src="/music/example.mp3" type="audio/mp3" />
        </audio>
        <Avatar top="10px" left="20px" width="40px" height="40px">
          <img
            style={{ width: '100%', height: '100%', borderRadius: '5px' }}
            src="/myStatic/pika.jpg"
            alt="图片加载错误"
          />
        </Avatar>
        <div className={Style.musicInfo}>
          <span>小城夏天</span>
          <br/>
          <span>LBI比利</span>
        </div>
        <Volume
          style={{ width: volumeBarWidth }}
          onmousedown={this.dragToMoveVolume}
        />
        <div className={Style.btn_area}>
          <i
            className="iconfont"
            style={{
              fontSize: '30px',
              position: 'absolute',
              top: '15px',
              left: '-9px',
              cursor: 'pointer',
            }}
          >
            &#xe612;
          </i>
          <SmallPlayBtn onClick={this.clickToPlay} playing={playing} />
          <i
            className="iconfont"
            style={{
              fontSize: '30px',
              position: 'absolute',
              top: '15px',
              left: '79px',
              cursor: 'pointer',
            }}
          >
            &#xe610;
          </i>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
