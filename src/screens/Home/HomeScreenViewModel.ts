import { useAppRouter } from 'src/common/lib/router';

export const useHomeScreenViewModel = () => {
  const router = useAppRouter();

  const handleInterestPointPress = (id: number) => {
    router.push(`/(home)/point/${id}`);
  };

  const handleTopInterestPointPress = (id: number) => {
    router.push(`/(home)/point/${id}`);
  };

  return {
    handleInterestPointPress,
    handleTopInterestPointPress,
  };
};
