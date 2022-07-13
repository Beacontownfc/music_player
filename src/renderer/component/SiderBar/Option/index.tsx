import { Link } from 'react-router-dom';
import style from './style.Module.css';

export default function Option(props: any) {
  const { path, name } = props;
  return (
    <Link to={path}>
      <div className={style.option}>
        <span style={{ color: 'white' }}>{name}</span>
      </div>
    </Link>
  );
}
