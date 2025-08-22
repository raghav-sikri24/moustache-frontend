import { authStore } from "../store/authStore";

export default function useResetAuthStore() {
  const { setAccessToken, setRefreshToken } = authStore();
  const resetAuthStore = () => {
    setAccessToken("");
    setRefreshToken("");
  };

  return resetAuthStore;
}
