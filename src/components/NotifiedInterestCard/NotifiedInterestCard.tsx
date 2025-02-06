import { TouchableOpacity, View } from 'react-native';
import { NotifiedInterestCardProps } from '~/src/components/NotifiedInterestCard/NotifiedInterestCard.types';
import { UserAvatar } from '../User/UserAvatar';
import { CustomText } from '../Text/CustomText';
import Feather from '@expo/vector-icons/Feather';
import { useNotifiedInterestCardViewModel } from '~/src/components/NotifiedInterestCard/NotifiedInterestCardViewModel';

export function NotifiedInterestCard({
  userName,
  imageUrl,
  email,
  itineraryTitle,
  phone,
  itineraryId,
}: NotifiedInterestCardProps) {
  const { handleOnPressItineraryRef, openWhatsApp } = useNotifiedInterestCardViewModel();

  return (
    <View className='h-[160px] w-full rounded-[9px] border-2 border-gray-800 bg-[#1C1C1E] p-4'>
      <View className='flex-row items-center space-x-3'>
        <UserAvatar userName={userName} imageUrl={imageUrl} />
        {/* <CustomText className='text-white' weight='bold' size={16}>
          {userName}
        </CustomText> */}
      </View>

      <View className='mt-4 space-y-2'>
        <View className='flex-row items-center'>
          <CustomText className='w-[70px] text-white' weight='bold' size={12}>
            Telefone:
          </CustomText>
          <TouchableOpacity onPress={() => openWhatsApp(phone)}>
            <CustomText className='text-blue-500' size={12}>
              {phone}
            </CustomText>
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center'>
          <CustomText className='w-[70px] text-white' weight='bold' size={12}>
            Email:
          </CustomText>
          <CustomText className='text-white' size={12}>
            {email}
          </CustomText>
        </View>

        <View className='flex-row items-center justify-between'>
          <View className='flex-row items-center'>
            <CustomText className='w-[70px] text-white' weight='bold' size={12}>
              Roteiro:
            </CustomText>
            <CustomText className='text-white' size={12}>
              {itineraryTitle}
            </CustomText>
          </View>
          <TouchableOpacity
            className='items-center justify-center px-2'
            onPress={() => handleOnPressItineraryRef(itineraryId)}>
            <Feather name='external-link' size={24} color='#3371E3' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
