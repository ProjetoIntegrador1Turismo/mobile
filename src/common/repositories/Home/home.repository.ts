import { api } from 'src/common/repositories/client';
import { HomePageModel } from 'src/common/models/HomePage/home.model';

export const fetchHomePageData = async () => {
  const { data } = await api.get<HomePageModel>('/page-source/home');
  return data;
};
