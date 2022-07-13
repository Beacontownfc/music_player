import style from './style.Module.css';
import Option from './Option';

export default function SiderBar() {
  return (
    <div className={style.siderBar}>
      <div className={style.content}>
        <Option name="推荐" path="/recommend" />
        <Option name="播放中" path="/playing" />
      </div>
    </div>
  );
}
