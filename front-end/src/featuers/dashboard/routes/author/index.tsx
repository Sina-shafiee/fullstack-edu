import { lazyImport } from '@/utils';
import { RouteObject } from 'react-router-dom';

const { Authors } = lazyImport(() => import('./authors'), 'Authors');

export const authorRoutes: RouteObject = {
  path: 'author',
  children: [
    {
      index: true,
      element: <Authors />,
    },
  ],
};
