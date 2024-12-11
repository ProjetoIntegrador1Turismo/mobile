import { ImageSourcePropType } from 'react-native';

export interface CategoryCardProps {
  title: string;
  imgSource: ImageSourcePropType;
  className?: string;
  onPress?: () => void;
}
