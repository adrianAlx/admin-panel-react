import './sidebar.scss';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import StoreIcon from '@mui/icons-material/Store';
import { NavLink } from 'react-router-dom';

import { useDarkMode } from '../../hooks/useDarkMode';

const Sidebar = () => {
  const { setDarkMode, setLightMode } = useDarkMode();

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/">
          <span className="logo">lamadmin</span>
        </NavLink>
      </div>

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <NavLink to="/">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <p className="title">LISTS</p>
          <li>
            <NavLink to="/users">
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <StoreIcon className="icon" />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders">
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption" onClick={() => setLightMode()}></div>
        <div className="colorOption" onClick={() => setDarkMode()}></div>
      </div>
    </div>
  );
};

export default Sidebar;
