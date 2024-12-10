import { useAppRouter } from 'src/common/lib/router';
import { BASE_URL } from 'src/common/repositories/client';
import { useHomePageQuery } from '~/src/common/hooks/queries/useHomePageQuery';

const calculatePriceLevel = (price: number): 1 | 2 | 3 => {
  if (price < 100) return 1;
  if (price <= 300) return 2;
  return 3;
};

export const useHomeScreenViewModel = () => {
  const router = useAppRouter();
  const { data: homeData, isLoading, isError } = useHomePageQuery();

  const transformedTopPoints = homeData?.top3InterestPoints.map((point, index) => ({
    id: point.id,
    name: point.name,
    imageCover: BASE_URL + point.imageCoverUrl,
    duration: point.duration,
    priceLevel: calculatePriceLevel(point.averageValue),
    medal: (index + 1) as 1 | 2 | 3,
  }));

  const transformedFirstSlider = homeData?.firstSlider.map((item) => ({
    id: item.id,
    name: item.name,
    imageCover: BASE_URL + item.imageCoverUrl,
    interestPointType: item.interestPointType,
  }));

  const transformedSecondSlider = homeData?.secondSlider.map((item) => ({
    id: item.id,
    name: item.name,
    imageCover: BASE_URL + item.imageCoverUrl,
    interestPointType: item.interestPointType,
  }));

  const transformedGuides = homeData?.topGuides.map((guide) => ({
    id: guide.id,
    name: `${guide.firstName} ${guide.lastName}`,
    profileImage: guide.profileImageUrl,
    rating: guide.averageRating,
  }));

  const handleInterestPointPress = (id: number) => {
    router.push(`/(home)/point/${id}`);
  };

  const handleTopInterestPointPress = (id: number) => {
    router.push(`/(home)/point/${id}`);
  };

  return {
    handleInterestPointPress,
    handleTopInterestPointPress,
    isLoading,
    isError,
    topPoints: transformedTopPoints,
    firstSlider: transformedFirstSlider,
    secondSlider: transformedSecondSlider,
    guides: transformedGuides,
  };
};
