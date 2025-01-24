import { useInterestedItineraryQuery } from '~/src/common/hooks/queries/useInterestedItineraryQuery';
import { removeInterestedItinerary } from '~/src/common/repositories/InterestedItinerary/interested.repository';
import { useQueryClient } from '@tanstack/react-query';

export function useInterestedScreenViewModel(authToken: string) {
  const { data, refetch, isLoading, error } = useInterestedItineraryQuery(authToken);

  const handleDeleteItinerary = async (id: number) => {
    const success = await removeInterestedItinerary(authToken, id);
    if (success) {
      refetch();
    }
  };

  if (!isLoading) {
    const axiosError = error as any;
    if (axiosError.response.status === 401) {
      console.log('AuthToken EXPIRADO');
    }
  }

  return {
    data,
    isLoading,
    error,
    handleDeleteItinerary,
  };
}
