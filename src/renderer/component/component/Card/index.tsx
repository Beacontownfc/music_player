import React from 'react';
import Style from './style.module.css';

export default class Card extends React.Component<any, any> {
  render() {
    const {
      children,
      backgroundColor,
      top,
      right,
      left,
      bottom,
      width,
      height,
    } = this.props;
    return (
      <div
        className={Style.card}
        style={{ backgroundColor, top, right, bottom, left, width, height }}
      >
        {children}
      </div>
    );
  }
}
