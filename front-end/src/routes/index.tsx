import { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';

import { publicRoutes } from './public';

export const AppRoutes = () => {
  const element = useRoutes([...publicRoutes]);

  return <Fragment>{element}</Fragment>;
};
