import { InterestPointPageModel, InterestPointType } from 'src/common/models/InterestPointScreen/interestPointScreen.model';
import { InterestPointByIdModel } from 'src/common/models/interestpointbyid.model';
import { api } from 'src/common/repositories/client';

function inferInterestPointType(point: any): InterestPointType {
  if (point.starsNumber !== null || point.isResort !== null || point.breakfastIncluded !== null) {
    return 'HOTEL';
  }
  if (point.foodType !== null) {
    return 'RESTAURANT';
  }
  if (point.requiredAge !== null) {
    return 'EXPERIENCE';
  }
  if (point.date !== null) {
    return 'EVENT';
  }
  return 'TOURIST_POINT';
}

export const fetchTourPageData = async (id: number) => {
  const { data } = await api.get<InterestPointPageModel>(`/page-source/tour/${id}`);
  
  // Adiciona o tipo inferido aos dados
  if (data.interestPoint) {
    data.interestPoint.interestPointType = inferInterestPointType(data.interestPoint);
  }
  
  return data;
};

export const fetchInterestPointById = async (id: number) => {
  const { data } = await api.get<InterestPointByIdModel>(`/interestpoint/${id}`);
  return data;
};
