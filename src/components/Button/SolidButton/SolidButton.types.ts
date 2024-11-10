import { GestureResponderEvent } from 'react-native';

export interface SolidButtonProps {
  title: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'black';
  onPress?: (event: GestureResponderEvent) => void;
}
