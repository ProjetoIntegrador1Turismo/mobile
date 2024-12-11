import { api } from 'src/common/repositories/client';
import { InterestPointPageModel } from 'src/common/models/InterestPointScreen/interestPointScreen.model';

export const fetchTourPageData = async (id: number) => {
  const { data } = await api.get<InterestPointPageModel>(`/page-source/tour/${id}`);
  return data;
};
