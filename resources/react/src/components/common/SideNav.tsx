import { SiJsonwebtokens } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="drawer-side">
      <ul className="menu w-80 bg-base-100 text-base-content">
        <aside className="bg-base-200 w-80 h-16">
          <div className={'flex flex-row p-4'}>
            <SiJsonwebtokens size={30} />
            <h1 className={'pl-1.5'} style={{ paddingTop: '2px' }}>
              Json Tools
            </h1>
          </div>
        </aside>
        <li>
          <NavLink to={'/'}>Json展開</NavLink>
        </li>
        <li>
          <NavLink to={'/jsonminify'}>Json圧縮</NavLink>
        </li>
        <li>
          <NavLink to={'/excel2json'}>ExcelからJson作成</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
