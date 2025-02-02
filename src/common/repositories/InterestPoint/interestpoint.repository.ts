import { InterestPointPageModel } from 'src/common/models/InterestPointScreen/interestPointScreen.model';
import { InterestPointByIdModel } from 'src/common/models/interestpointbyid.model';
import { api } from 'src/common/repositories/client';

export const fetchTourPageData = async (id: number) => {
  const { data } = await api.get<InterestPointPageModel>(`/page-source/tour/${id}`);
  return data;
};

export const fetchInterestPointById = async (id: number) => {
  const { data } = await api.get<InterestPointByIdModel>(`/interestpoint/${id}`);
  return data;
};
