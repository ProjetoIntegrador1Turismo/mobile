import { GestureResponderEvent } from 'react-native';

export interface TLGradientButtonProps {
  title: string;
  className?: string;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}
