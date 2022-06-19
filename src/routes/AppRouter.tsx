import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { PublicLayout } from '../layout/PublicLayout';

import { Home } from '../pages/home/Home';
import { List } from '../pages/list/List';
import { Login } from '../pages/login/Login';
import { New } from '../pages/new/New';
import { Single } from '../pages/single/Single';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />

          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
