import { useAppRouter } from 'src/common/lib/router';
import { useAuthStore } from 'src/common/stores/AuthStore';

import { useGetMeQuery } from '~/src/common/hooks/queries/useGetMeQuery';

export const useProfileViewModel = () => {
  const { isAuthenticated, logout, user } = useAuthStore();
  const { push } = useAppRouter();
  const { data: GetMeData, isLoading } = useGetMeQuery(user?.email ?? '');

  const userTypeMap: Record<string, string> = {
    Tourist: 'Turista',
    Guide: 'Guia de Turismo',
    Admin: 'Administrador',
  };

  const handleLoginPress = () => {
    push('/(auth)/login');
  };

  const handlePressEdit = () => {
    push('/(auth)/editprofile');
  };

  const handleLogoutPress = () => {
    logout();
  };

  return {
    isAuthenticated,
    handleLoginPress,
    handleLogoutPress,
    handlePressEdit,
    user,
    userTypeMap,
    GetMeData,
    isLoading,
  };
};
