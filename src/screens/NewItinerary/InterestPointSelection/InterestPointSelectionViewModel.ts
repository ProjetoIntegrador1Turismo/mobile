import { useAppRouter } from '~/src/common/lib/router';

const useInterestPointSelectionViewModel = () => {
  const { goBack } = useAppRouter();

  const handleGoBackPress = () => {
    goBack();
  };

  return { handleGoBackPress };
};
