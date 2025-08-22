import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AUTH_STATE {
  accessToken: string;
  refreshToken: string;
  setAccessToken: (payload: string) => void;
  setRefreshToken: (payload: string) => void;
}

export const authStore = create<AUTH_STATE>()(
  devtools(
    persist(
      (set, _) => ({
        accessToken: "",
        refreshToken: "",
        setAccessToken: (payload) => set(() => ({ accessToken: payload })),
        setRefreshToken: (payload) => set(() => ({ refreshToken: payload })),
      }),
      {
        name: "AuthStore",
      }
    )
  )
);
