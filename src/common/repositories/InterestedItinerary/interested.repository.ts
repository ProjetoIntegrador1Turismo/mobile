import { InterestedItineraryModel } from '~/src/common/models/InterestedItinerary/InterestedItynerary.model';
import { api } from '~/src/common/repositories/client';

export async function fetchInterestedItinerary(authToken: string) {
  const { data } = await api.get<InterestedItineraryModel>('/user/me', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data;
}

export async function removeInterestedItinerary(itineraryId: number) {
  try {
    await api.delete(`/tourist/signal/${itineraryId}`);
    return true;
  } catch (error) {
    return false;
  }
}
