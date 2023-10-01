import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';

export type ThemeState = {
  isDarkMode: boolean;
};

export type ThemeActions = {
  toggleTheme: () => void;
};

export const useThemeState = create<ThemeState & ThemeActions>()(
  immer(
    persist(
      (set, get) => ({
        isDarkMode: true,
        toggleTheme: () =>
          set((state) => {
            state.isDarkMode = !get().isDarkMode;
          }),
      }),
      {
        name: 'code-baz_theme',
        partialize: (state) => state.isDarkMode,
        storage: createJSONStorage(() => localStorage),
        merge(persistedState, currentState) {
          const isDarkMode = persistedState ?? currentState.isDarkMode;
          return {
            isDarkMode,
            toggleTheme: currentState.toggleTheme,
          } as ThemeState & ThemeActions;
        },
      }
    )
  )
);
