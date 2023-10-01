import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type SidebarState = {
  isOpen: boolean;
};

export type SidebarActions = {
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

export const useSidebarState = create<SidebarState & SidebarActions>()(
  immer((set, get) => ({
    isOpen: false,
    openSidebar: () =>
      set((state) => {
        state.isOpen = true;
      }),
    closeSidebar: () => {
      set((state) => {
        state.isOpen = false;
      });
    },
    toggleSidebar: () => {
      set((state) => {
        state.isOpen = !get().isOpen;
      });
    },
  }))
);
