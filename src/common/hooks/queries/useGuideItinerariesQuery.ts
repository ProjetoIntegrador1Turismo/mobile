import { useQuery } from '@tanstack/react-query';
import { GuideItinerariesModel } from 'src/common/models/GuideItineraries/guideItineraries.model';
import { fetchGuideItineraries } from 'src/common/repositories/GuideItineraries/guideItineraries.repository';

export const useGuideItinerariesQuery = () => {
  return useQuery<GuideItinerariesModel>({
    queryKey: ['guide-itineraries'],
    queryFn: fetchGuideItineraries,
  });
};
