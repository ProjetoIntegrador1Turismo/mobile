import { useAppRouter } from 'src/common/lib/router';
import { useAuthStore } from 'src/common/stores/AuthStore';

export const useProfileViewModel = () => {
  const { isAuthenticated, logout, user } = useAuthStore();
  const { push } = useAppRouter();

  const handleLoginPress = () => {
    push('/(auth)/login');
  };

  const handlePressEdit = () => {
    push('/(profile)/editprofile');
  };

  return { isAuthenticated, handleLoginPress, logout, handlePressEdit, user };
};
