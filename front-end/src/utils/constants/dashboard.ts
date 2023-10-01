import { LayoutDashboard, LayoutList, User2 } from 'lucide-react';

import { SidebarLink } from '@/types';

export const dashboardSidebarLinks: SidebarLink[] = [
  { title: 'داشبورد', href: '/dashboard', Icon: LayoutDashboard },
  { title: 'نویسندگان', href: '/dashboard/author', Icon: User2 },
  { title: 'دوره ها', href: '/dashboard/course', Icon: LayoutList },
];
