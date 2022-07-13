import React, { createRef } from 'react';
import Style from './style.Module.css';

export default class Swiper extends React.Component<any, any> {
  private swiperRef: any;

  private left: number;

  private int: any;

  constructor(props: any) {
    super(props);
    this.swiperRef = createRef();
    this.left = 0;
    this.int = '';
  }

  shouldComponentUpdate(): boolean {
    clearInterval(this.int);
    return true;
  }

  render() {
    this.int = setInterval(() => {
      if (this.left <= -900) {
        this.left = 0;
        this.swiperRef.current.style.transition = 'left 0s';
      } else {
        this.left -= 300;
        this.swiperRef.current.style.transition = 'left 2s';
      }
      this.swiperRef.current.style.left = `${this.left}px`;
    }, 3000);
    const { imgs } = this.props;

    return (
      <div className={Style.swiper}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={Style.swiperBody} ref={this.swiperRef}>
          {imgs.map((item: { src: string | undefined }) => {
            return (
              <div className={Style.swiperItem}>
                <img
                  src={item.src}
                  alt="无图片"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
