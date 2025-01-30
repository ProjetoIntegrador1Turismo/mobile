import { View, SafeAreaView } from 'react-native';
import { useAuthStore } from 'src/common/stores/AuthStore';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import UnauthenticatedImage2 from 'src/components/Auth/UnauthenticatedImage/UnauthenticatedImage2';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';

import { GuidePanelScreen } from '../GuidePainel/GuidePanelScreen';
import { InterestedItinerariesScreen } from '../Interested/InterestedItinerariesScreen';

export default function DynamicTabScreen() {
  const userType = useAuthStore((state) => state.user?.userType);

  if (userType === 'Guide') {
    return <GuidePanelScreen />;
  }

  if (userType === 'Tourist') {
    return <InterestedItinerariesScreen />;
  }

  return (
    <SafeAreaView className='flex-1 bg-tl-bg px-4'>
      <View className='items-center pt-12'>
        <TLLogoWhite className='h-16 w-20 object-cover' />
      </View>
      <View className='flex-1 items-center justify-center gap-6'>
        <UnauthenticatedImage2 className='h-64 w-64' />
        <CustomText className='text-center text-white' weight='regular' size={16}>
          Faça login para ver seus roteiros!
        </CustomText>
        <TLGradientButton title='Login' className='w-11/12' onPress={() => {}} />
      </View>
      <View className='h-32' />
    </SafeAreaView>
  );
}
