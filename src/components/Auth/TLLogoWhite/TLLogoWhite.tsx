import { Image } from 'react-native';
import type { TLLogoWhiteProps } from 'src/components/Auth/TLLogoWhite/TLLogoWhite.types';

export default function TLLogoWhite({ className, style }: TLLogoWhiteProps) {
  return <Image source={require('assets/tl-white.png')} className={className} style={style} />;
}
