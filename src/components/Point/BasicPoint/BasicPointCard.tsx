import { Image, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CustomText } from '~/src/components/Text/CustomText';
import { BasicPointCardProps } from '~/src/components/Point/BasicPoint/BasicPointCard.types';
import Entypo from '@expo/vector-icons/Entypo';
import {
  truncatedPointName,
  onPressPointCard,
} from '~/src/components/Point/BasicPoint/BasicPointCardViewModel';
import { AverageValue } from '~/src/components/Price/AverageValue/AverageValue';
import { cn } from '~/src/common/utils/cn';
import { Content } from '~/src/common/models/Category/categoryDetail.model';
import { BASE_URL } from '~/src/common/repositories/client';

export function BasicPointCard({ data, className }: { data: Content; className?: string }) {
  const { name, title, imageCoverUrl, id, interestPointType } = data;
  const { handlePressPointCard } = onPressPointCard();
  const displayName = title || name;

  return (
    <TouchableOpacity onPress={() => handlePressPointCard(id, interestPointType)}>
      <View className={cn('relative h-[90px] w-[100%] flex-row rounded-2xl overflow-hidden bg-black', className)}>
        <Image
          source={{ uri: BASE_URL + imageCoverUrl }}
          className='h-full w-full rounded-2xl opacity-50'
          resizeMode='cover'
        />
        <View className='absolute h-full w-full flex-row items-center justify-between px-3'>
          <View className='flex-col flex-1 mr-2'>
            <CustomText className='text-white' weight='bold' size={20}>
              {truncatedPointName(displayName, 25)}
            </CustomText>
          </View>
          <View className='h-full justify-center'>
            <AntDesign name='arrowright' size={24} color='white' />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
