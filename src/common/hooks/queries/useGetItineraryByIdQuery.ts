import { useQuery } from '@tanstack/react-query';
import { ItineraryByIdModel } from 'src/common/models/GuideItineraries/itinerarybyid.model';
import { fetchItineraryById } from 'src/common/repositories/Guide/guide.repository';

export const useItineraryByIdQuery = (id: number) => {
  return useQuery<ItineraryByIdModel>({
    queryKey: ['itinerary-by-id', id],
    queryFn: () => fetchItineraryById(id),
  });
};
