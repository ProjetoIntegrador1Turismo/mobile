import React from 'react';
import { View, Image, Text } from 'react-native';
import { InterestPointCardProps } from 'src/components/InterestPoint/InterestPointCard/InterestPointCard.types';

export function InterestPointCard({ id, name, imageCover }: InterestPointCardProps) {
  return (
    <View className='h-[206px] w-[162px] overflow-hidden rounded-xl bg-black shadow-lg'>
      <Image
        source={{ uri: imageCover }}
        style={{ width: '100%', height: '100%' }}
        className='object-cover opacity-95'
      />
      <View className='absolute bottom-4 w-full px-2'>
        <Text className='text-center text-lg font-bold text-white'>{name}</Text>
      </View>
    </View>
  );
}
