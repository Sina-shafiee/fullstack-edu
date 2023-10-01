import { Dashboard } from '@/featuers/dashboard';
import { Navigate, RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/dashboard/*',
    element: <Dashboard />,
  },
];
