// GuideItineraryCardViewModel.ts

import { GuideItineraryCardProps } from './GuideItineraryCard.types';

export function useGuideItineraryCardViewModel(props: GuideItineraryCardProps) {
  return {
    ...props,
  };
}
