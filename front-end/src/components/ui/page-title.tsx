import { useSidebarState, useThemeState } from '@/state';
import { Button } from './button';
import { MoonStar, PanelRight, PanelRightClose } from 'lucide-react';

export const PageTitle = () => {
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);
  const isSidebarOpen = useSidebarState((state) => state.isOpen);
  const toggleTheme = useThemeState((state) => state.toggleTheme);
  return (
    <section className="flex h-16 items-center gap-3 mb-2 justify-between">
      <section className="flex items-center gap-1">
        <img src="/images/logo.webp" className="h-11 py-1 ms-2 w-auto" />
        <p className="text-2xl font-medium tracking-wider">کدباز</p>
      </section>
      <div className="flex items-center">
        <Button
          size="icon"
          onClick={toggleTheme}
          variant="ghost"
          className="h-11 w-11 rounded-full"
        >
          <MoonStar className="h-7 w-7" strokeWidth={1.4} />
        </Button>
        <Button
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            toggleSidebar();
          }}
          variant="ghost"
          className="h-11 lg:hidden w-11 rounded"
        >
          {isSidebarOpen ? (
            <PanelRightClose className="h-7 w-7" strokeWidth={1.7} />
          ) : (
            <PanelRight className="h-7 w-7" strokeWidth={1.7} />
          )}
        </Button>
      </div>
    </section>
  );
};
