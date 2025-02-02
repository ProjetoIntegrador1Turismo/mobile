import { TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';

import { SelectedInterestPointCardProps } from './SelectedInterestPointCard.types';
import { useSelectedInterestPointCardViewModel } from './SelectedInterestPointCardViewModel';

import { BASE_URL } from '~/src/common/repositories/client';
import { cn } from '~/src/common/utils/cn';
import { CustomText } from '~/src/components/Text/CustomText';

export function SelectedInterestPointCard({ id, className }: SelectedInterestPointCardProps) {
  const { data, isLoading } = useSelectedInterestPointCardViewModel(id);

  if (isLoading) {
    return (
      <View className='h-[90px] w-[362px] flex-1 items-center justify-center overflow-hidden rounded-2xl'>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <View className={cn('h-[90px] w-[362px] overflow-hidden rounded-2xl', className)}>
      <Image
        source={{ uri: BASE_URL + data.imageCoverUrl }}
        className='h-full w-full object-cover'
      />
      <View className='absolute inset-0 bg-black/50' />
      <View className='absolute left-[30px] top-[19px]'>
        <CustomText weight='bold' size={16} className='text-white'>
          {data.name}
        </CustomText>
      </View>
    </View>
  );
}
