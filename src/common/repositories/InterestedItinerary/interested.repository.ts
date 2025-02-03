import { InterestedItineraryModel } from '~/src/common/models/InterestedItinerary/InterestedItynerary.model';
import { api } from '~/src/common/repositories/client';
import { useAppRouter } from '~/src/common/lib/router';

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

export async function signalItineraryInterest(itineraryId: number) {
  try {
    await api.post(`/tourist/signal/${itineraryId}`);
    return true;
  } catch (error: any) {
    if (error.response?.status === 400) {
      throw new Error('Você já sinalizou interesse nesse roteiro!');
    }
    if (error.response?.status === 401) {
      throw new Error('Você precisa estar logado para sinalizar interesse!');
    }
    throw error;
  }
}
