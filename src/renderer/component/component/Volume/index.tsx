import React from 'react';
import Style from './style.module.css';

export default class Volume extends React.Component<any, any> {
  render() {
    const { style, onmousedown } = this.props;
    return (
      <div className={Style.volumeBar}>
        <i
          className="iconfont"
          style={{
            fontSize: '15px',
            position: 'absolute',
            top: '-5px',
            left: '-18px',
          }}
        >
          &#xe87b;
        </i>
        <div className={Style.volumeBarSmall}>
          <div className={Style.currentBar} style={style}>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
              className={Style.smallBall}
              onMouseDown={onmousedown}
              style={{ left: style.width - 3 }}
            />
          </div>
        </div>
      </div>
    );
  }
}
