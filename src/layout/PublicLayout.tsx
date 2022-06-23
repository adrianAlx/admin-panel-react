import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

import { Home } from '../pages/home/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routesPublicLayout } from '../routes/routes';
import './PublicLayout.scss';

export const PublicLayout = () => {
  return (
    <div className="publicLayout">
      <Sidebar />

      <div className="publicLayoutContainer">
        <Navbar />

        <Routes>
          <Route index element={<Home />} />

          {routesPublicLayout.map(({ path, Component, ManiPath }) => (
            <Route key={path} path={ManiPath}>
              <Route path={path} element={<Component />} />
            </Route>
          ))}

          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
};
