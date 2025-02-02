import { useMutation } from '@tanstack/react-query';
import { editItinerary } from 'src/common/repositories/Guide/guide.repository';

export const useEditItineraryMutation = () => {
  return useMutation({ mutationFn: editItinerary });
};
