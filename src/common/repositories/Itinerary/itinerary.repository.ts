import { api } from 'src/common/repositories/client';
import { ItineraryPageData } from 'src/screens/Itinerary/ItineraryScreen.types';

export const fetchItineraryData = async (id: number) => {
  const { data } = await api.get<ItineraryPageData>(`/page-source/itinerary/${id}`);
  return data;
};
