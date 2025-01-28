import { useInterestedItineraryQuery } from '~/src/common/hooks/queries/useInterestedItineraryQuery';
import { removeInterestedItinerary } from '~/src/common/repositories/InterestedItinerary/interested.repository';
import { useQueryClient } from '@tanstack/react-query';

export function useInterestedItinerariesScreenViewModel(authToken: string) {
  const { data, refetch, isLoading } = useInterestedItineraryQuery(authToken);

  const handleDeleteItinerary = async (id: number) => {
    const success = await removeInterestedItinerary(authToken, id);
    if (success) {
      refetch();
    }
  };

  return {
    data,
    isLoading,
    handleDeleteItinerary,
  };
}
