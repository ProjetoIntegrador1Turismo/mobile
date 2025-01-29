import { useQuery } from '@tanstack/react-query';
import { GuideItinerariesModel } from '../../models/GuideItineraries/guideItineraries.model';
import { fetchGuideItineraries } from '../../repositories/GuideItineraries/guideItineraries.repository';

export const useGuideItinerariesQuery = () => {
  return useQuery<GuideItinerariesModel>({
    queryKey: ['guide-itineraries'],
    queryFn: fetchGuideItineraries,
  });
};
