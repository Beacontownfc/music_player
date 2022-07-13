import React from 'react';
import Style from './style.module.css';

export default class Avatar extends React.Component<any, any> {
  render() {
    const { right, left, top, bottom } = this.props;
    return (
      <div className={Style.player} style={{ right, left, top, bottom }}>
        <div
          style={{
            width: '90px',
            height: '90px',
            backgroundColor: '#5C6170',
            borderRadius: '45px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-45px',
            marginLeft: '-45px',
          }}
        />
        <div
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: '#585D6E',
            borderRadius: '35px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-35px',
            marginLeft: '-35px',
          }}
        />
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#7E8292',
            borderRadius: '25px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            cursor: 'pointer',
            marginTop: '-25px',
            marginLeft: '-25px',
          }}
        />
        <div className={Style.play_btn}>
          <i
            className="iconfont"
            style={{ fontSize: '50px', cursor: 'pointer' }}
          >
            &#xe6a3;
          </i>
        </div>
      </div>
    );
  }
}
