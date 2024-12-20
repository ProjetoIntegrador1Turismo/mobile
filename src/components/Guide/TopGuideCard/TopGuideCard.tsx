import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TopGuideCardProps } from 'src/components/Guide/TopGuideCard/TopGuideCard.types';
import { CustomText } from 'src/components/Text/CustomText';
import { Avatar } from 'src/components/Avatar/Avatar';
import { Stars } from 'src/components/Stars/Stars';

export function TopGuideCard({ id, profileImage, name, rating, onClick }: TopGuideCardProps) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View className='flex h-[55px] w-[362px] flex-row items-center rounded-xl border border-white px-2 py-2'>
        <Avatar imageUrl={profileImage} size={40} />

        <View className='ml-4  flex-auto overflow-hidden'>
          <CustomText size={14} weight='regular' className='text-white '>
            {name}
          </CustomText>
        </View>

        <Stars rating={rating} starSize={12} />

        <Entypo name='dots-three-horizontal' size={20} color='white' className='ml-4' />
      </View>
    </TouchableOpacity>
  );
}
