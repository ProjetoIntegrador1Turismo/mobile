import { useAppRouter } from '~/src/common/lib/router';

export const useRecoverySucessViewModel = () => {
  const { goBack } = useAppRouter();

  const handleGoBack = () => {
    goBack();
  };

  return { handleGoBack };
};
