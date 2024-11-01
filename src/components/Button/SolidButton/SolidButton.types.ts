import { GestureResponderEvent } from 'react-native';

export interface SolidButtonProps {
  title: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'black';
  onPress?: (event: GestureResponderEvent) => void;
}
