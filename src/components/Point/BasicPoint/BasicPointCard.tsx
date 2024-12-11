import { Image, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CustomText } from '~/src/components/Text/CustomText';
import { BasicPointCardProps } from '~/src/components/Point/BasicPoint/BasicPointCard.types';
import Entypo from '@expo/vector-icons/Entypo';
import { truncatedPointName } from '~/src/components/Point/BasicPoint/BasicPointCardViewModel';
import { AverageValue } from '~/src/components/Price/AverageValue/AverageValue';
import { cn } from '~/src/common/utils/cn';

export function BasicPointCard({
  data,
  className,
}: {
  data: BasicPointCardProps;
  className?: string;
}) {
  const {
    pointName,
    maxPointNameLength = 20,
    averageRating,
    averageValue,
    imageCover,
    onPress,
  } = data;

  return (
    <TouchableOpacity onPress={onPress}>
      <View className={cn('relative h-[85px] w-[100%] flex-row rounded-2xl border-2', className)}>
        <Image
          source={{ uri: imageCover }}
          className='h-full w-full rounded-2xl opacity-60'
          resizeMode='cover'
        />
        <View className='absolute h-full w-full flex-row items-center justify-between px-4'>
          <View className='flex-col'>
            <CustomText className='mt-[5px] text-white' weight='bold' size={20}>
              {truncatedPointName(pointName, maxPointNameLength)}
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
