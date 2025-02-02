import { useAppRouter } from '~/src/common/lib/router';

export const useInterestPointCategoryListEditViewModel = () => {
  const { push } = useAppRouter();

  const handleCategoryPress = (category: string) => {
    push(`(modals)/category-details-edit?pointType=${category}`);
  };
  return { handleCategoryPress };
};
