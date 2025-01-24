import { InterestPoint } from 'src/screens/Itinerary/ItineraryScreen.types';

export interface ItineraryPointCardProps extends Pick<InterestPoint, 'name' | 'shortDescription' | 'imageCoverUrl' | 'interestPointType'> {
  onPress?: () => void;
}
