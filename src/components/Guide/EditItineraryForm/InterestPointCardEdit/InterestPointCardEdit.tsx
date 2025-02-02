import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Image, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { InterestPointCardEditProps } from './InterestPointCardEdit.types';
import { useInterestPointCardEditViewModel } from './InterestPointCardEditViewModel';

import { BASE_URL } from '~/src/common/repositories/client';
import { cn } from '~/src/common/utils/cn';
import { truncatedPointName } from '~/src/components/Point/BasicPoint/BasicPointCardViewModel';
import { AverageValue } from '~/src/components/Price/AverageValue/AverageValue';
import { CustomText } from '~/src/components/Text/CustomText';

export function InterestPointCardEdit({ data, className }: InterestPointCardEditProps) {
  const { name, title, averageRating, averageValue, imageCoverUrl, id } = data;

  const displayName = title || name;

  const { handleOnPressCard } = useInterestPointCardEditViewModel();

  return (
    <TouchableOpacity onPress={() => handleOnPressCard(id)}>
      <View className={cn('relative h-[85px] w-[100%] flex-row rounded-2xl border-2', className)}>
        <Image
          source={{ uri: BASE_URL + imageCoverUrl }}
          className='h-full w-full rounded-2xl opacity-60'
          resizeMode='cover'
        />
        <View className='absolute h-full w-full flex-row items-center justify-between px-4'>
          <View className='flex-col'>
            <CustomText className='mt-[5px] text-white' weight='bold' size={20}>
              {truncatedPointName(displayName, 20)}
            </CustomText>
            <View className='mt-1 flex-row'>
              <Entypo name='star' size={16} color='#FF007F' />
              <CustomText className='ml-[2px] mt-[-4px] text-white' size={16} weight='bold'>
                {averageRating}
              </CustomText>
              <View className='mb-[8px] ml-[20px] flex-row items-center'>
                <AntDesign name='right' size={12} color='white' />
                <AverageValue value={averageValue} />
              </View>
            </View>
          </View>
          <View>
            <AntDesign name='arrowright' size={30} color='white' />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
