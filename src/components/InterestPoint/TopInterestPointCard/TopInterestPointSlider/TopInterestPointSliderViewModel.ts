import { Dimensions } from 'react-native';
import { TopInterestPointCardProps } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard.types';

const MEDAL_ORDER = { 1: 0, 2: -1, 3: 1 } as const;

export const useTopInterestPointSliderViewModel = () => {
  const organizeByMedalRanking = (
    items: TopInterestPointCardProps[]
  ): TopInterestPointCardProps[] => {
    return [...items].sort((a, b) => MEDAL_ORDER[a.medal] - MEDAL_ORDER[b.medal]);
  };

  const width = Dimensions.get('window').width;

  return { organizeByMedalRanking, width };
};
