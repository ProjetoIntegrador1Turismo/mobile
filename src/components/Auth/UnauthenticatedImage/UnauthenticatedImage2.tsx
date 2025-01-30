import { Image } from 'react-native';
import { UnauthenticatedImage2Props } from 'src/components/Auth/UnauthenticatedImage/UnauthenticatedImage2.types';

export default function UnauthenticatedImage2({ className, style }: UnauthenticatedImage2Props) {
  return (
    <Image source={require('assets/unauthenticated-2.png')} className={className} style={style} />
  );
}
