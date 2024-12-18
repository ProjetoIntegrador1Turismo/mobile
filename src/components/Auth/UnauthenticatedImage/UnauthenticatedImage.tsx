import { Image } from 'react-native';
import { UnauthenticatedImageProps } from 'src/components/Auth/UnauthenticatedImage/UnauthenticatedImage.types';

export default function UnauthenticatedImage({ className, style }: UnauthenticatedImageProps) {
  return (
    <Image source={require('assets/unauthenticated.png')} className={className} style={style} />
  );
}
