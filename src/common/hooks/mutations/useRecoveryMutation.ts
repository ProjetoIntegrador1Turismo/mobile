import { useMutation } from '@tanstack/react-query';
import { Recovery } from 'src/common/repositories/auth/auth.repository';

export const useRecoveryMutation = () => {
  return useMutation({ mutationFn: Recovery });
};
