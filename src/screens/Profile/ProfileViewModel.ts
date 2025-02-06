import { useAppRouter } from 'src/common/lib/router';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { useQueryClient } from '@tanstack/react-query';
import { useGetMeQuery } from '~/src/common/hooks/queries/useGetMeQuery';

export const useProfileViewModel = () => {
  const { isAuthenticated, logout, user } = useAuthStore();
  const { push } = useAppRouter();
  const { data: GetMeData, isLoading } = useGetMeQuery(user?.email ?? '');
  const queryClient = useQueryClient();

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
    
    queryClient.invalidateQueries({ queryKey: ['guide-itineraries'] });
    queryClient.invalidateQueries({ queryKey: ['guideProfile'] });
    queryClient.invalidateQueries({ queryKey: ['homePage'] });
    queryClient.invalidateQueries({ queryKey: ['interested'] });
    queryClient.invalidateQueries({ queryKey: ['tourPage'] });
    queryClient.invalidateQueries({ queryKey: ['category'] });
    queryClient.invalidateQueries({ queryKey: ['me'] });
    queryClient.clear();
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
