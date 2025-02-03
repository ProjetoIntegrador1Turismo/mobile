import { useQuery } from '@tanstack/react-query';
import { fetchItineraryData } from 'src/common/repositories/Itinerary/itinerary.repository';
import { useSignalItineraryInterestMutation } from '~/src/common/hooks/mutations/useSignalItineraryInterestMutation';

export const useItineraryScreenViewModel = ({ itineraryId }: { itineraryId: number }) => {
  const {
    data: pageData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['itinerary', itineraryId],
    queryFn: () => fetchItineraryData(itineraryId),
  });

  const signalInterestMutation = useSignalItineraryInterestMutation(itineraryId);

  return {
    guide: pageData?.guide,
    itinerary: pageData?.itinerary,
    reviews: pageData?.reviews,
    isLoading,
    isError,
    signalInterest: signalInterestMutation.mutate,
    isSignalingInterest: signalInterestMutation.isPending,
  };
};
