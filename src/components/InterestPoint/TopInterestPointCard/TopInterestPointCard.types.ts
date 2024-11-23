import { GestureResponderEvent } from 'react-native';

export interface TopInterestPointCardProps {
  id: number;
  name: string;
  imageCover: string;
  medal: 1 | 2 | 3;
  duration: string;
  priceLevel: 1 | 2 | 3;
  onPress?: (event: GestureResponderEvent) => void;
}
