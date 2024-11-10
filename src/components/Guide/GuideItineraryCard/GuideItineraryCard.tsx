// GuideItineraryCard.tsx

import React from 'react';
import { View, Pressable, Image } from 'react-native';
import { GuideItineraryCardProps } from './GuideItineraryCard.types';
import { useGuideItineraryCardViewModel } from './GuideItineraryCardViewModel';
import { Avatar } from 'src/components/Avatar/Avatar';
import { FontAwesome5 } from '@expo/vector-icons';
import { CustomText } from 'src/components/Text/CustomText';

export function GuideItineraryCard(props: GuideItineraryCardProps) {
  const { guide, title, backgroundImage, onPress } = useGuideItineraryCardViewModel(props);

  return (
    <View className='flex h-[160px] w-full items-center justify-center overflow-hidden rounded-xl bg-[#1C1C1E] shadow-lg'>
      <Image
        source={{ uri: backgroundImage }}
        style={{ width: '100%', height: '100%' }}
        className='object-cover opacity-25'
      />

      <View className='absolute inset-0 flex items-center justify-between gap-3 p-4'>
        <View className='flex-row items-center justify-center'>
          <Avatar imageUrl={guide.profileImage} size={35} />
          <CustomText className='ml-2 text-white' weight='regular'>
            Guia: <CustomText className='text-white' weight='bold'>{guide.name}</CustomText>
          </CustomText>
        </View>

        <CustomText className='mb-2 text-2xl text-white' weight='bold' size={24}>
          {title}
        </CustomText>

        <Pressable
          onPress={onPress}
          className='flex-row items-center justify-center rounded-md bg-blue-600 px-2 py-2'>
          <CustomText className='mr-2 text-white' weight='regular' size={16}>
            Conhecer Roteiro
          </CustomText>
          <FontAwesome5 name='external-link-alt' size={18} color='white' />
        </Pressable>
      </View>
    </View>
  );
}
