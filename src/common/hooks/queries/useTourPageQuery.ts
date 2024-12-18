import { useQuery } from '@tanstack/react-query';
import { InterestPointPageModel } from 'src/common/models/InterestPointScreen/interestPointScreen.model';
import { fetchTourPageData } from 'src/common/repositories/InterestPoint/interestpoint.repository';

export const useTourPageQuery = (id: number) => {
  return useQuery<InterestPointPageModel>({
    queryKey: ['tourPage', id],
    queryFn: () => fetchTourPageData(id),
  });
};
