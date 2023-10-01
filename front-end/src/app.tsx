import { Fragment } from 'react';
import { AppProvider } from './provider';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <Fragment>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </Fragment>
  );
};
