import { Feather } from '@expo/vector-icons';
import { Pressable, ScrollView, TouchableOpacity, View } from 'react-native';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import UnauthenticatedImage from 'src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { Container } from 'src/components/Container/Container';
import { CustomText } from 'src/components/Text/CustomText';

import { useProfileViewModel } from './ProfileViewModel';

import { Avatar } from '~/src/components/Avatar/Avatar';
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
    <Container className='gap-4 bg-tl-bg px-4 pt-12'>
      <View className='flex w-full flex-row justify-between'>
        <View className='h-[80px] w-[95px]' />
        <TLLogoWhite className='-ml-3 h-[80px] w-[95px] object-cover' />
        <View className='h-[80px] w-[95px] items-end justify-center border'>
          <TouchableOpacity onPress={handlePressEdit}>
            <Feather name='edit' color='#FFF' size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View className='items-center'>
        <Avatar imageUrl={user!.profileImageUrl} size={120} />
        <CustomText className='text-white'>{user!.firstName + ' ' + user?.lastName}</CustomText>
      </View>
      <TLGradientButton title='Logout' className='w-11/12' onPress={() => logout()} />
      <TLGradientButton title='Editar Informações' className='w-11/12' onPress={handlePressEdit} />
    </Container>
  );
}
