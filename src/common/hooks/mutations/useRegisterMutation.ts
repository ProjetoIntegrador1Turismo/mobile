import { useMutation } from '@tanstack/react-query';
import { Register } from 'src/common/repositories/auth/auth.repository';

export const useRegisterMutation = () => {
  return useMutation({ mutationFn: Register });
};
