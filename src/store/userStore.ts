import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User, UserRole } from '@/types/common';

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (updates: Partial<User>) => void;
  clearUser: () => void;
  role: UserRole | null;
  setRole: (role: UserRole) => void;
  preferences: {
    currency: string;
    language: string;
    theme: 'light' | 'dark';
  };
  updatePreferences: (updates: Partial<UserState['preferences']>) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set(() => ({ user })),
        updateUser: (updates) =>
          set((state) => ({
            user: state.user ? { ...state.user, ...updates } : null,
          })),
        clearUser: () => set(() => ({ user: null, role: null })),
        role: null,
        setRole: (role) => set(() => ({ role })),
        preferences: {
          currency: 'USD',
          language: 'en',
          theme: 'light',
        },
        updatePreferences: (updates) =>
          set((state) => ({
            preferences: { ...state.preferences, ...updates },
          })),
      }),
      {
        name: 'user-store',
      }
    )
  )
);
