import { useQuery } from '@tanstack/react-query';

import { GetMeModel } from '../../models/getme.model';
import { GetMe } from '../../repositories/auth/auth.repository';

export const useGetMeQuery = (email: string) => {
  return useQuery<GetMeModel>({
    queryKey: ['GetMe', email],
    queryFn: GetMe,
  });
};
