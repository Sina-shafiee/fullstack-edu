import { RouteObject } from 'react-router-dom';

import { DashboardLayout } from '@/components/layout';
import { Sidebar } from '@/components/ui';

import { dashboardSidebarLinks } from '@/utils/constants';
import { RenderInnerRoutes } from '@/utils';

import { authorRoutes } from './author';
import { courseRoutes } from './course';

export const dashboardRoutes: RouteObject[] = [authorRoutes, courseRoutes];

export const Dashboard = () => {
  return (
    <DashboardLayout Sidebar={<Sidebar links={dashboardSidebarLinks} />}>
      <RenderInnerRoutes routes={dashboardRoutes} />
    </DashboardLayout>
  );
};
