import React from 'react';
import Style from './style.Module.css';
import Swiper from '../../component/Swiper';
import Card from '../../component/Card';
import Avatar from '../../component/avatar';
import PlayBtn from '../../component/playBtn';
import SmallPlayBtn from '../../component/SmallPlayBtn';

export default class MainBody extends React.Component<any, any> {
  private imgs: any;

  constructor(props: any) {
    super(props);
    this.state = {
      barStyle: { right: '20px', opacity: '0', transition: 'opacity 1s' },
    };
    this.imgs = [
      { src: '/swiper/109951167652805156.jpg' },
      { src: '/swiper/109951167652805156.jpg' },
      { src: '/swiper/109951167652805156.jpg' },
      { src: '/swiper/109951167652805156.jpg' },
    ];
  }

  onMouseMove = () => {
    this.setState({
      barStyle: { right: '20px', opacity: '1', transition: 'opacity 1s' },
    });
  };

  onMouseLeave = () => {
    this.setState({
      barStyle: { right: '20px', opacity: '0', transition: 'opacity 1s' },
    });
  };

  render() {
    const { barStyle } = this.state;
    return (
      <div className={Style['main-body']}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Swiper imgs={this.imgs} />
          <Swiper imgs={this.imgs} />
        </div>
        <Card>
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
            <div className={Style.bar}>
              <Avatar top="10px" left="20px" width="30px" height="30px">
                <img
                  className={Style.image}
                  src="/myStatic/pika.jpg"
                  alt="图片加载错误"
                />
              </Avatar>
              <div className={Style.musicDesc}>小城夏天</div>
              <SmallPlayBtn
                style={barStyle}
                playing
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
              />
            </div>
            <div className={Style.bar}>
              <Avatar top="10px" left="20px" width="30px" height="30px">
                <img
                  className={Style.image}
                  src="/myStatic/kabi.jpg"
                  alt="图片加载错误"
                />
              </Avatar>
              <div className={Style.musicDesc}>小城夏天</div>
              <SmallPlayBtn
                style={barStyle}
                playing
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
              />
            </div>
            <div className={Style.bar}>
              <Avatar top="10px" left="20px" width="30px" height="30px">
                <img
                  className={Style.image}
                  src="/myStatic/keda.jpg"
                  alt="图片加载错误"
                />
              </Avatar>
              <div className={Style.musicDesc}>小城夏天</div>
              <SmallPlayBtn
                style={barStyle}
                playing
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
              />
            </div>
            <div className={Style.bar}>
              <Avatar top="10px" left="20px" width="30px" height="30px">
                <img
                  className={Style.image}
                  src="/myStatic/jieni.jpg"
                  alt="图片加载错误"
                />
              </Avatar>
              <div className={Style.musicDesc}>小城夏天</div>
              <SmallPlayBtn
                style={barStyle}
                playing
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
