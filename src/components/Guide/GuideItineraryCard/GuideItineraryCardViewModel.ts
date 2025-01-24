// GuideItineraryCardViewModel.ts

import { useAppRouter } from 'src/common/lib/router';
import { GuideItineraryCardProps } from './GuideItineraryCard.types';

export const useGuideItineraryCardViewModel = (props: GuideItineraryCardProps) => {
  const router = useAppRouter();
  const { guide, title, backgroundImage, itineraryId, onPress } = props;

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push(`/(tabs)/(search)/itinerary/${itineraryId}`);
    }
  };

  return {
    guide,
    title,
    backgroundImage,
    onPress: handlePress,
  };
};
