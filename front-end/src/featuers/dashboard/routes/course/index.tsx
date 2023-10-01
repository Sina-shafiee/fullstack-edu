import { lazyImport } from '@/utils';
import { RouteObject } from 'react-router-dom';

const { Courses } = lazyImport(() => import('./course'), 'Courses');

export const courseRoutes: RouteObject = {
  path: 'course',
  children: [
    {
      index: true,
      element: <Courses />,
    },
  ],
};
