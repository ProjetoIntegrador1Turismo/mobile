import { View, Text, SafeAreaView } from 'react-native';
import { useAuthStore } from 'src/common/stores/AuthStore';

import { GuidePainelScreen } from '../GuidePainel/GuidePainelScreen';
import { InterestedItinerariesScreen } from '../Interested/InterestedItinerariesScreen';

import TLLogoWhite from '~/src/components/Auth/TLLogoWhite/TLLogoWhite';
import UnauthenticatedImage from '~/src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';
import { TLGradientButton } from '~/src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from '~/src/components/Text/CustomText';

export default function DynamicTabScreen() {
  const userType = useAuthStore((state) => state.user?.userType);

  if (userType === 'Guide') {
    return <GuidePainelScreen authToken='' />;
  }

  if (userType === 'Tourist') {
    return <InterestedItinerariesScreen authToken='' />;
  }

  return (
    <SafeAreaView className='flex-1 bg-tl-bg px-4'>
      <View className='items-center pt-12'>
        <TLLogoWhite className='h-16 w-20 object-cover' />
      </View>
      <View className='flex-1 items-center justify-center gap-6'>
        <UnauthenticatedImage className='h-64 w-64' />
      </View>
      <View className='h-32' />
    </SafeAreaView>
  );
}
