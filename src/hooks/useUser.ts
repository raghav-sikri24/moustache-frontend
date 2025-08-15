import { useUserStore } from '@/store/userStore';
import { User } from '@/types/common';
import { useQuery, useMutation } from '@tanstack/react-query';
import { api } from '@/lib/axios';

export function useUser() {
  const { user, setUser, updateUser } = useUserStore();

  const { data, isLoading } = useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const response = await api.get<User>('/user/profile');
      return response.data;
    },
    enabled: !!user,
  });

  const updateProfileMutation = useMutation({
    mutationFn: async (updates: Partial<User>) => {
      const response = await api.patch<User>('/user/profile', updates);
      return response.data;
    },
    onSuccess: (updatedUser) => {
      updateUser(updatedUser);
    },
  });

  return {
    user: data || user,
    isLoading,
    updateProfile: updateProfileMutation.mutate,
    isUpdating: updateProfileMutation.isPending,
  };
}
