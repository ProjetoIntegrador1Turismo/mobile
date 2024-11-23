import { GestureResponderEvent } from 'react-native';

export interface InterestPointCardProps {
  id: number;
  name: string;
  imageCover: string;
  onPress?: (event: GestureResponderEvent) => void;
}
