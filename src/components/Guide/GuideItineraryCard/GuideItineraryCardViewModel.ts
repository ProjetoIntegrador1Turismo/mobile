// GuideItineraryCardViewModel.ts

import { useAppRouter } from 'src/common/lib/router';
import { GuideItineraryCardProps } from './GuideItineraryCard.types';

export const useGuideItineraryCardViewModel = (props: GuideItineraryCardProps) => {
  const router = useAppRouter();
  const { guide, title, backgroundImage, itineraryId } = props;

  const handlePress = () => {
    router.dismiss(); // Fecha o modal se estiver aberto
    router.push(`/(tabs)/(search)/itinerary/${itineraryId}`);
  };

  return {
    guide,
    title,
    backgroundImage,
    onPress: handlePress,
  };
};
