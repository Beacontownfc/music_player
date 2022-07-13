import React from 'react';
import Style from './style.module.css';

export default class SmallPlayBtn extends React.Component<any, any> {
  render() {
    const { style, playing, onClick, onMouseMove, onMouseLeave } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        className={Style.play_btn}
        style={style}
        onClick={onClick}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <i
          className="iconfont"
          style={{
            fontSize: '40px',
            display: !playing ? 'none' : 'inline-block',
          }}
        >
          &#xe6a3;
        </i>
        <i
          className="iconfont"
          style={{
            fontSize: '30px',
            display: !playing ? 'inline-block' : 'none',
          }}
        >
          &#xe629;
        </i>
      </div>
    );
  }
}
