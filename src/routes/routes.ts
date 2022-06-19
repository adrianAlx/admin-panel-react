import { LazyExoticComponent } from 'react';

import { PublicLayout } from '../layout/PublicLayout';

import { List } from '../pages/list/List';
import { Login } from '../pages/login/Login';
import { New } from '../pages/new/New';
import { Single } from '../pages/single/Single';

type JSXComponent = () => JSX.Element;

interface Route {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
  to: string;
}

export const routes: Route[] = [
  {
    Component: PublicLayout,
    name: 'Public Layout',
    path: '/*',
    to: '/',
  },
  {
    Component: Login,
    name: 'Login',
    path: 'login',
    to: '/login',
  },
];

export const routesPublicLayout = [
  {
    ManiPath: 'users',
    path: '',
    Component: List,
  },
  {
    Component: Single,
    ManiPath: 'users',
    path: ':userId',
  },
  {
    Component: New,
    ManiPath: 'users',
    path: 'new',
  },

  {
    Component: List,
    ManiPath: 'products',
    path: '',
  },
  {
    Component: Single,
    ManiPath: 'products',
    path: ':userId',
  },
  {
    Component: New,
    ManiPath: 'products',
    path: 'new',
  },
];
