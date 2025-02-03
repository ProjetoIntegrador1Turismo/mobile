import { useMutation } from '@tanstack/react-query';
import { deleteItinerary } from 'src/common/repositories/GuideItineraries/guideItineraries.repository';

export function useDeleteItineraryMutation() {
  return useMutation({
    mutationFn: deleteItinerary,
  });
}
