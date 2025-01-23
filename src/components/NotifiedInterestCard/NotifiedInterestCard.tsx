import { TouchableOpacity, View, Touchable } from 'react-native';
import { NotifiedInterestCardProps } from '~/src/components/NotifiedInterestCard/NotifiedInterestCard.types';
import { UserAvatar } from '../User/UserAvatar';
import { CustomText } from '../Text/CustomText';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNotifiedInterestCardViewModel } from '~/src/components/NotifiedInterestCard/NotifiedInterestCardViewModel';

export function NotifiedInterestCard({
  userName,
  imageUrl,
  email,
  itineraryTitle,
  phone,
}: NotifiedInterestCardProps) {
  const { handleOnPressItineraryRef, openWhatsApp } = useNotifiedInterestCardViewModel();

  return (
    <View className='items-center justify-center p-2'>
      <View className='h-[185px] w-[300px] rounded-[9px] border-2 bg-black'>
        <View className='ml-[15px] mt-[11px]'>
          <UserAvatar userName={userName} imageUrl={imageUrl} />
        </View>
        <View className='ml-[22px] mt-[11px]'>
          <View className='flex flex-row'>
            <CustomText className='w-[70px] text-white' weight='bold' size={12}>
              Telefone:
            </CustomText>
            <TouchableOpacity onPress={() => openWhatsApp(phone)}>
              <CustomText className='text-blue-500' size={12}>
                {' '}
                {phone}
              </CustomText>
            </TouchableOpacity>
          </View>
          <CustomText className='text-white' weight='bold' size={12}>
            Email:
            <CustomText size={12}> {email}</CustomText>
          </CustomText>
          <CustomText className='text-white' weight='bold' size={12}>
            Roteiro:
          </CustomText>
          <TouchableOpacity
            className='flex flex-row items-center'
            onPress={() => handleOnPressItineraryRef(1)}>
            <CustomText className='text-white' size={16}>
              {itineraryTitle}
            </CustomText>
            <EvilIcons name='external-link' size={30} color='#3371E3' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
