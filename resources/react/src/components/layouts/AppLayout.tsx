import { NavLink, Outlet } from 'react-router-dom';
import { SiJsonwebtokens } from 'react-icons/si';
import { AiOutlineFileExcel } from 'react-icons/ai';
import SideNav from '../common/SideNav';

const AppLayout = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div
        className="drawer-content"
        style={{ scrollBehavior: 'smooth', scrollPaddingTop: '5rem' }}
      >
        <Outlet />
      </div>
      <SideNav />
    </div>
  );
};

export default AppLayout;
