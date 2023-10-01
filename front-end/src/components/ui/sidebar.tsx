import { useCallback, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebarState } from '@/state';
import { useClickOutside } from '@/hooks';
import { cn } from '@/utils';

import { SidebarLink } from '@/types';

import { Accordion } from './accordion';

type Props = {
  links: SidebarLink[];
};

export const SubLink = ({ pathname, href, title }: { [key: string]: string }) => {
  const isActiveSubRoute = pathname === href;
  return (
    <Link
      key={title}
      to={href}
      className={cn(
        'transition-all duration-200 flex items-center py-3 px-6 rounded cursor-pointer gap-2',
        isActiveSubRoute
          ? 'bg-muted/40 hover:bg-muted/70 text-primary'
          : 'bg-background text-foreground hover:bg-muted/40 hover:text-primary'
      )}
    >
      <span>{title}</span>
    </Link>
  );
};

export const Sidebar = ({ links }: Props) => {
  const isSideBarOpen = useSidebarState((state) => state.isOpen);
  const closeModal = useSidebarState((state) => state.closeSidebar);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const { pathname } = useLocation();

  const handleResize = useCallback(() => {
    if (window.innerWidth < 1024) {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    closeModal();
  }, [pathname, closeModal]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useClickOutside({ ref: sidebarRef, callback: closeModal });

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        'w-72 z-50 bg-background rounded-e-3xl border-l overflow-y-auto pb-12 fixed lg:sticky top-0  shadow-sm min-h-full duration-300 transition-all',
        isSideBarOpen
          ? 'opacity-100  right-0 pointer-events-auto'
          : 'opacity-0 pointer-events-none -right-full lg:right-0 lg:opacity-100 lg:pointer-events-auto'
      )}
    >
      <section className="h-16 pt-8 mt-4 flex items-center mx-auto max-w-max gap-2">
        <Link to="/dashboard">
          <img src="/images/logo.webp" className="h-14 w-auto" />
        </Link>
      </section>
      <ul className="px-2 pt-12 pb-8">
        {links.map(({ title, href, subLinks, Icon }) => {
          const isActiveRoute = href === pathname;
          const SubLinks = subLinks?.map(({ href, title }) => {
            return <SubLink title={title} key={title} href={href} pathname={pathname} />;
          });
          return (
            <li key={title}>
              {href ? (
                <Link
                  key={title}
                  to={href}
                  className={cn(
                    'flex items-center py-3 transition-all duration-200 px-6 rounded cursor-pointer gap-2',
                    isActiveRoute
                      ? 'bg-muted/40 hover:bg-muted/70 text-primary'
                      : 'bg-background text-foreground hover:bg-muted/40 hover:text-primary'
                  )}
                >
                  {Icon && <Icon className="h-6 w-6" strokeWidth={1.2} />}
                  <span>{title}</span>
                </Link>
              ) : subLinks ? (
                <Accordion
                  className="bg-background py-1"
                  contentClassName="px-4 py-1"
                  _content={SubLinks}
                  _title={
                    <button className="ps-4 w-full flex items-center gap-2">
                      {Icon && <Icon className="h-6 w-6" strokeWidth={1.2} />}
                      <span>{title}</span>
                    </button>
                  }
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
