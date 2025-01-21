import { useMutation } from '@tanstack/react-query';
import { UpdateProfile } from 'src/common/repositories/auth/auth.repository';

export const useEditProfileMutation = () => {
  return useMutation({ mutationFn: UpdateProfile });
};
