import React from 'react';
import Style from './style.Module.css';
import '../../../../../assets/font/iconfont.css';
import Input from '../../component/Input';

export default class Header extends React.Component<any, any> {
  handleClickMax = (type: string) => {
    window.electron.ipcRenderer.sendMessage(type, []);
  };

  render() {
    return (
      <div className={Style.header}>
        <i className={`${Style.cursor} iconfont`}>&#xe612;</i>
        <i className={`${Style.cursor} iconfont`}>&#xe610;</i>
        <Input />
        <div className={Style.control_x}>×</div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className={Style.control_y}
          onClick={() => {
            this.handleClickMax('window-max');
          }}
        >
          ▢
        </div>
        <div className={Style.control_z}>-</div>
      </div>
    );
  }
}
