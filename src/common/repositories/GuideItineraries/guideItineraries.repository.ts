import { GuideItinerariesModel } from 'src/common/models/GuideItineraries/guideItineraries.model';
import { api } from 'src/common/repositories/client';

export async function fetchGuideItineraries() {
  const { data } = await api.get<GuideItinerariesModel>('/itinerary/guide');
  return data;
}

export async function deleteItinerary(id: number) {
  await api.delete(`/itinerary/${id}`);
}
