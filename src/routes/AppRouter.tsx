import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from './routes';
import { useDarkMode } from '../hooks/useDarkMode';

import './../style/dark.scss';

export const AppRouter = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`app ${(darkMode && 'dark') || ''}`}>
      <BrowserRouter>
        <Routes>
          {
            routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
};
