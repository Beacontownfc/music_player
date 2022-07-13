import React from 'react';
import Style from './style.module.css';

export default class Avatar extends React.Component<any, any> {
  render() {
    const { right, left, top, bottom, children, width, height } = this.props;
    return (
      <div className={Style.avatar} style={{ right, left, top, bottom, width, height }}>
        {children}
      </div>
    );
  }
}
