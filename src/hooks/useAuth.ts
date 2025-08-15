import { useAuthStore } from '@/store/authStore';
import { useUserStore } from '@/store/userStore';
import { AuthResponse, User } from '@/types/common';
import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/axios';

export function useAuth() {
  const { setTokens, clearTokens } = useAuthStore();
  const { setUser, clearUser } = useUserStore();

  const loginMutation = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      return response.data;
    },
    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken);
      setUser(data.user);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userData: {
      email: string;
      password: string;
      name: string;
    }) => {
      const response = await api.post<AuthResponse>('/auth/register', userData);
      return response.data;
    },
    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken);
      setUser(data.user);
    },
  });

  const logout = () => {
    clearTokens();
    clearUser();
  };

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout,
    isLoading: loginMutation.isPending || registerMutation.isPending,
  };
}
