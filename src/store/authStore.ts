import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        accessToken: '',
        refreshToken: '',
        isAuthenticated: false,
        setTokens: (accessToken, refreshToken) =>
          set(() => ({
            accessToken,
            refreshToken,
            isAuthenticated: true,
          })),
        clearTokens: () =>
          set(() => ({
            accessToken: '',
            refreshToken: '',
            isAuthenticated: false,
          })),
      }),
      {
        name: 'auth-store',
      }
    )
  )
);
