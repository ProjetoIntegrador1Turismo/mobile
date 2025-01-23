import { api } from 'src/common/repositories/client';
import { GuideProfileModel } from 'src/screens/GuideProfile/GuideProfileScreen.types';

export const fetchGuideProfileData = async (id: number) => {
  const { data } = await api.get<GuideProfileModel>(`/page-source/guide/${id}`);
  return data;
};
