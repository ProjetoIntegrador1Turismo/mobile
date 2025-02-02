import { Platform } from 'react-native';
import { NewItineraryModel } from 'src/common/models/newitinerary.model';
import { api } from 'src/common/repositories/client';
import { GuideProfileModel } from 'src/screens/GuideProfile/GuideProfileScreen.types';
import { v4 as uuidv4 } from 'uuid';

import { CreateItineraryDTO } from './guide.types';

export const fetchGuideProfileData = async (id: number) => {
  const { data } = await api.get<GuideProfileModel>(`/page-source/guide/${id}`);
  return data;
};

export const createNewItinerary = async (newItineraryData: CreateItineraryDTO) => {
  const { averageCost, days, ...rest } = newItineraryData;

  const { data } = await api.post<NewItineraryModel>(
    '/itinerary',
    JSON.stringify({
      ...rest,
      days: Number(days),
      mediumCost: Number(averageCost),
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return data;
};

export const uploadItineraryCoverImage = async ({
  itineraryId,
  uri,
}: {
  itineraryId: number;
  uri: string;
}) => {
  if (!uri) {
    throw new Error('URI inválido para o upload.');
  }

  const payload = new FormData();
  const fileType = uri.split('.').pop();
  payload.append('id', itineraryId.toString());
  payload.append('file', {
    uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
    type: `image/${fileType}`,
    name: `${uuidv4()}.${fileType}`,
  } as any);

  try {
    const { data } = await api.post<string>('/file/upload/itinerary', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error) {
    console.error('Upload API error:', error);
    throw error;
  }
};
