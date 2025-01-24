import {
  GuideItinerary,
  GuideProfileModel,
} from '~/src/screens/GuideProfile/GuideProfileScreen.types';

export interface FullGuideItineraryListProps {
  guide: Pick<GuideProfileModel, 'firstName' | 'lastName' | 'profileImageUrl'>;
  itineraries: GuideItinerary[];
  onClose: () => void;
}
