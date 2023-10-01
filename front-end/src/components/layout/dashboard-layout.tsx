import { ReactNode } from 'react';

type Props = {
  Sidebar: ReactNode;
  children: ReactNode;
};

export const DashboardLayout = ({ children, Sidebar }: Props) => {
  return (
    <div className="w-full h-screen flex overflow-x-hidden">
      {Sidebar}
      <main id="dashboard-container" className="flex-1 px-2 sm:px-4 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};
