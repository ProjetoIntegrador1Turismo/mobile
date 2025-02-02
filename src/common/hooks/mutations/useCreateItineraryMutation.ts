import { useMutation } from '@tanstack/react-query';
import { createNewItinerary } from 'src/common/repositories/Guide/guide.repository';

export const useCreateItineraryMutation = () => {
  return useMutation({ mutationFn: createNewItinerary });
};
