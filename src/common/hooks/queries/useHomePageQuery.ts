import { useQuery } from '@tanstack/react-query';
import { HomePageModel } from '../../models/HomePage/home.model';
import { fetchHomePageData } from 'src/common/repositories/Home/home.repository';

export const useHomePageQuery = () => {
  return useQuery<HomePageModel>({ 
    queryKey: ['homePage'], 
    queryFn: fetchHomePageData 
  });
};
