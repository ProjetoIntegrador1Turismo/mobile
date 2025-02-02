import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';

import { SelectedInterestPointCardProps } from './SelectedInterestPointCard.types';
import { useSelectedInterestPointCardViewModel } from './SelectedInterestPointCardViewModel';

import { BASE_URL } from '~/src/common/repositories/client';
import { cn } from '~/src/common/utils/cn';
import { CustomText } from '~/src/components/Text/CustomText';

export function SelectedInterestPointCard({ id, className, onPressRemove }: SelectedInterestPointCardProps) {
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
    <View className={cn('relative h-[90px] w-[362px] overflow-hidden rounded-2xl', className)}>
      <Image
        source={{ uri: BASE_URL + data.imageCoverUrl }}
        className='h-full w-full object-cover'
      />
      <View className='absolute inset-0 bg-black/50' />
      <View className='absolute left-[30px] top-[19px] max-w-[300px]' style={{ maxWidth: 260 }}>
        <CustomText weight='bold' size={16} className='max-w-[300px] text-white'>
          {data.name}
        </CustomText>
      </View>

      {/* Delete Button */}
      <TouchableOpacity
        onPress={onPressRemove}
        className='absolute right-2 top-5 h-16 w-16 items-center justify-center rounded-2xl bg-red-500'>
        <Feather name='x-circle' size={24} color='white' />
      </TouchableOpacity>
    </View>
  );
}
