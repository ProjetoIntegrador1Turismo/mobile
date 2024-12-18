import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import UnauthenticatedImage from 'src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { Container } from 'src/components/Container/Container';
import { CustomText } from 'src/components/Text/CustomText';

import { useProfileViewModel } from './ProfileViewModel';

import { UserAvatar } from '~/src/components/User/UserAvatar';

export function ProfileView() {
  const { handleLoginPress, isAuthenticated, logout, handlePressEdit, user } =
    useProfileViewModel();

  if (!isAuthenticated) {
    return (
      <Container className='flex-1 bg-tl-bg px-4'>
        <View className='items-center pt-12'>
          <TLLogoWhite className='h-16 w-20 object-cover' />
        </View>
        <View className='flex-1 items-center justify-center gap-6'>
          <UnauthenticatedImage className='h-64 w-64' />
          <CustomText className='text-center text-white' weight='regular' size={16}>
            Faça login para ver seus roteiros!
          </CustomText>
          <TLGradientButton title='Login' className='w-11/12' onPress={handleLoginPress} />
        </View>
        <View className='h-32' />
      </Container>
    );
  }

  return (
    <Container className='items-center justify-center gap-4 bg-tl-bg px-4'>
      <CustomText className='h-40 w-80 text-white'>{JSON.stringify(user, null, 2)}</CustomText>
      <TLGradientButton title='Logout' className='w-11/12' onPress={() => logout()} />
      <TLGradientButton title='Editar Informações' className='w-11/12' onPress={handlePressEdit} />
    </Container>
  );
}
