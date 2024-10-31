import React from 'react';
import { View, Image, Text } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useTopGuideCardViewModel } from './TopGuideCardViewModel';
import { TopGuideCardProps } from 'src/components/Guide/TopGuideCard/TopGuideCard.types';
import { CustomText } from 'src/components/Text/CustomText';

export function TopGuideCard({ id, profileImage, name, rating }: TopGuideCardProps) {
  const { stars } = useTopGuideCardViewModel(rating);

  return (
    <View className='flex h-[55px] w-[362px] flex-row items-center rounded-xl border border-white bg-[#1C1C1E] px-2 py-2'>
      <Image
        source={{ uri: profileImage }}
        style={{ width: 41, height: 41 }}
        className='rounded-full'
      />

      <View className='ml-4  flex-1 overflow-hidden'>
        <CustomText size={14} color='white' weight='regular'>
          {name}
        </CustomText>
      </View>

      <View className='flex flex-row items-center space-x-1'>
        <Text className='text-white'>Avaliação:</Text>
        <View className='flex flex-row'>
          {stars.map((filled, index) => (
            <AntDesign key={index} name='star' size={14} color={filled ? '#FF007F' : 'gray'} />
          ))}
        </View>
      </View>

      <Entypo name='dots-three-horizontal' size={20} color='white' className='ml-4' />
    </View>
  );
}
