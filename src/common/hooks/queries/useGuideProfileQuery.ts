import { useQuery } from '@tanstack/react-query';
import { GuideProfileModel } from 'src/screens/GuideProfile/GuideProfileScreen.types';
import { fetchGuideProfileData } from 'src/common/repositories/Guide/guide.repository';

export const useGuideProfileQuery = (id: number) => {
  return useQuery<GuideProfileModel>({
    queryKey: ['guideProfile', id],
    queryFn: () => fetchGuideProfileData(id),
  });
};
