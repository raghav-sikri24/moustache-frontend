import axios, { AxiosInstance } from "axios";
import { authStore } from "./store/authStore";
import { API_BASE_URL } from "./utils/endpoints";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProtectedAxios = (): AxiosInstance => {
  const instance = axios.create();
  let isRefreshing = false;
  let refreshSubscribers: ((token: string) => void)[] = [];

  const onRefreshed = (newAccessToken: string) => {
    refreshSubscribers.forEach((callback) => callback(newAccessToken));
    refreshSubscribers = [];
  };

  const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
  };

  // Request interceptor
  instance.interceptors.request.use(
    (config) => {
      const { accessToken } = authStore.getState();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { config, response } = error;
      if (response?.status === 401) {
        if (!isRefreshing) {
          isRefreshing = true;
          const { refreshToken } = authStore.getState();

          try {
            const { data } = await axios.post(
              `${API_BASE_URL}api/token/refresh`,
              {
                refresh_token: refreshToken,
              }
            );
            const { access_token, refresh_token: newRefreshToken } = data;

            const { setAccessToken, setRefreshToken } = authStore.getState();
            setAccessToken(access_token);
            setRefreshToken(newRefreshToken);

            instance.defaults.headers.common["Authorization"] =
              `Bearer ${access_token}`;
            config.headers["Authorization"] = `Bearer ${access_token}`;

            onRefreshed(access_token);
            isRefreshing = false;

            return instance(config);
          } catch (err) {
            const { setAccessToken, setRefreshToken } = authStore.getState();
            setAccessToken("");
            setRefreshToken("");
            isRefreshing = false;
            return Promise.reject(err);
          }
        }

        return new Promise((resolve) => {
          addRefreshSubscriber((newAccessToken) => {
            config.headers["Authorization"] = `Bearer ${newAccessToken}`;
            resolve(instance(config));
          });
        });
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
