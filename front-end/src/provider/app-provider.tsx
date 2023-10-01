import { Fragment, type FC, type PropsWithChildren, Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useThemeState } from '@/state';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 4,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">
        متاسفانه مشکلی پیش امد لطفا بعدا تلاش کنید
      </h2>
    </div>
  );
};
const LoadingFallback = () => {
  useEffect(() => {
    NProgress.start();
    NProgress.configure({
      showSpinner: false,
    });
    return () => {
      NProgress.done();
    };
  }, []);
  return (
    <div
      className="bg-background w-full h-[101vh] flex flex-col items-center justify-center"
      role="alert"
    ></div>
  );
};

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const isDarkMode = useThemeState((state) => state.isDarkMode);

  useEffect(() => {
    console.log(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  return (
    <Fragment>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<LoadingFallback />}>
            <Router>{children}</Router>
          </Suspense>
        </QueryClientProvider>
      </ErrorBoundary>
    </Fragment>
  );
};
