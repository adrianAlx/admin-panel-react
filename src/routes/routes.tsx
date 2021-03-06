import { LazyExoticComponent } from 'react';

import { PublicLayout } from '../layout/PublicLayout';

import { List } from '../pages/list/List';
import { Login } from '../pages/login/Login';
import { New } from '../pages/new/New';
import { productInputs, userInputs } from '../formSource';
import { Single } from '../pages/single/Single';

type JSXComponent = () => JSX.Element;

interface Route {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
  to: string;
}
interface RoutesPublicLayout {
  ManiPath: string;
  path: string;
  Component: () => JSX.Element;
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

export const routesPublicLayout: RoutesPublicLayout[] = [
  {
    Component: List,
    ManiPath: 'users',
    path: '',
  },
  {
    Component: Single,
    ManiPath: 'users',
    path: ':userId',
  },
  {
    Component: () => <New inputs={userInputs} title="Add New User" />,
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
    path: ':productId',
  },
  {
    Component: () => <New inputs={productInputs} title="Add New Product" />,
    ManiPath: 'products',
    path: 'new',
  },

  {
    Component: List,
    ManiPath: 'orders',
    path: '',
  },
  {
    Component: Single,
    ManiPath: 'orders',
    path: ':orderId',
  },
  {
    Component: () => <New inputs={productInputs} title="Add New Order" />,
    ManiPath: 'orders',
    path: 'new',
  },
];
