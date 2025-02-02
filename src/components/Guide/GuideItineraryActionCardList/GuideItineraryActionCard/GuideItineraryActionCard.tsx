import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { CustomText } from 'src/components/Text/CustomText';
import { useAppRouter } from 'src/common/lib/router';

import { GuideItineraryActionCardProps } from './GuideItineraryActionCard.types';

import { BASE_URL } from '~/src/common/repositories/client';
import { cn } from '~/src/common/utils/cn';

export function GuideItineraryActionCard({
  imageCoverUrl,
  title,
  className,
  onPressEdit,
  onPressDelete,
  itineraryId,
}: GuideItineraryActionCardProps) {
  const router = useAppRouter();

  const handleLinkPress = () => {
    router.replace(`/(tabs)/(search)`);
    setTimeout(() => {
      router.push(`/(tabs)/(search)/itinerary/${itineraryId}`);
    }, 0);
  };

  return (
    <View className='pl-4 pr-4'>
      <View
        className={cn(
          'flex h-[160px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#1C1C1E] to-black shadow-lg',
          className
        )}>
        <Image
          source={{ uri: BASE_URL + imageCoverUrl }}
          style={{ width: '100%', height: '100%' }}
          className='object-cover opacity-25'
        />
        <View className='absolute inset-0 flex items-center justify-between p-4'>
          <CustomText className='mb-2 mt-5 text-white' weight='bold' size={24}>
            {title}
          </CustomText>
          <View className='flex-row items-center justify-center'>
            <TouchableOpacity onPress={handleLinkPress} className='items-center justify-center px-6'>
              <Feather name='external-link' size={32} color='#3371E3' />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressEdit} className='items-center justify-center px-6'>
              <Feather name='edit-3' size={32} color='#F8CA36' />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressDelete} className='items-center justify-center px-6'>
              <MaterialCommunityIcons name='trash-can' size={32} color='#FF3B30' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
