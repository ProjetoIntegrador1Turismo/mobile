import { useGetMeQuery } from 'src/common/hooks/queries/useGetMeQuery';
import { removeInterestedItinerary } from '~/src/common/repositories/InterestedItinerary/interested.repository';
import { useAuthStore } from '~/src/common/stores/AuthStore';

export function useInterestedItinerariesScreenViewModel() {
  const { user } = useAuthStore();
  const { data, refetch, isLoading } = useGetMeQuery(user!.email);

  const handleDeleteItinerary = async (id: number) => {
    const success = await removeInterestedItinerary(id);
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
