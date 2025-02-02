import { useQuery } from '@tanstack/react-query';
import { InterestPointByIdModel } from 'src/common/models/interestpointbyid.model';
import { fetchInterestPointById } from 'src/common/repositories/InterestPoint/interestpoint.repository';

export const useInterestPointByIdQuery = (id: number) => {
  return useQuery<InterestPointByIdModel>({
    queryKey: ['interest-point-', id],
    queryFn: () => fetchInterestPointById(id),
  });
};
