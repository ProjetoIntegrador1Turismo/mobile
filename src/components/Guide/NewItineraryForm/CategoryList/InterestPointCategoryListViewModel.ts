import { useAppRouter } from '~/src/common/lib/router';

export const useInterestPointCategoryListViewModel = () => {
  const { push } = useAppRouter();

  const handleCategoryPress = (category: string) => {
    push(`(modals)/category-details?pointType=${category}`);
  };
  return { handleCategoryPress };
};
