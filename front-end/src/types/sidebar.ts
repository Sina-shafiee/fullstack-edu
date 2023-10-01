import { LucideIcon } from 'lucide-react';

export type SidebarLink = {
  title: string;
  href?: string;
  subLinks?: { title: string; href: string }[];
  Icon?: LucideIcon;
};
