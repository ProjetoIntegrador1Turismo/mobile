import { useMutation } from '@tanstack/react-query';
import { UploadProfilePicture } from 'src/common/repositories/auth/auth.repository';

export const useUploadProfilePictureMutation = () => {
  return useMutation({ mutationFn: UploadProfilePicture });
};
