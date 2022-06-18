import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

import './PublicLayout.scss';

export const PublicLayout = () => {
  return (
    <div className="publicLayout">
      <Sidebar />

      <div className="publicLayoutContainer">
        <Navbar />

        <Outlet />
      </div>
    </div>
  );
};
