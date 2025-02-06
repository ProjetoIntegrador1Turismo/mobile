import AntDesign from '@expo/vector-icons/AntDesign';
import { Image, TouchableOpacity, View } from 'react-native';
import { InterestPointCardEditProps } from './InterestPointCardEdit.types';
import { useInterestPointCardEditViewModel } from './InterestPointCardEditViewModel';
import { BASE_URL } from '~/src/common/repositories/client';
import { cn } from '~/src/common/utils/cn';
import { truncatedPointName } from '~/src/components/Point/BasicPoint/BasicPointCardViewModel';
import { CustomText } from '~/src/components/Text/CustomText';

export function InterestPointCardEdit({ data, className }: InterestPointCardEditProps) {
  const { name, title, imageCoverUrl, id } = data;
  const displayName = title || name;
  const { handleOnPressCard } = useInterestPointCardEditViewModel();

  return (
    <TouchableOpacity onPress={() => handleOnPressCard(id)}>
      <View
        className={cn(
          'relative h-[90px] w-[100%] flex-row overflow-hidden rounded-2xl bg-black',
          className
        )}>
        <Image
          source={{ uri: BASE_URL + imageCoverUrl }}
          className='h-full w-full rounded-2xl opacity-50'
          resizeMode='cover'
        />
        <View className='absolute h-full w-full flex-row items-center justify-between px-3'>
          <View className='mr-2 flex-1 flex-col'>
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
