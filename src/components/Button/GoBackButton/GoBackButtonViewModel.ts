import { useAppRouter } from '~/src/common/lib/router';

export const useGoBackButtonViewModel = () => {
  const { goBack } = useAppRouter();

  const handleGoBack = () => {
    goBack();
  };

  return { handleGoBack };
};
