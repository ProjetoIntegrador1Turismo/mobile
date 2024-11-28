import { GestureResponderEvent } from 'react-native';

export interface InterestPointCardProps {
  id: number;
  name: string;
  imageCover: string;
  interestPointType?: string;
  onPress?: (event: GestureResponderEvent) => void;
}
