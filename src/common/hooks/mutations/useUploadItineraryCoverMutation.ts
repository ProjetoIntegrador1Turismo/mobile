import { useMutation } from '@tanstack/react-query';
import { uploadItineraryCoverImage } from 'src/common/repositories/Guide/guide.repository';

export const useUploadItineraryCoverMutation = () => {
  return useMutation({ mutationFn: uploadItineraryCoverImage });
};
