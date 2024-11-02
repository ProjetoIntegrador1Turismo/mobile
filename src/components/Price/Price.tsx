import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PriceProps } from 'src/components/Price/Price.types';

export function Price({ priceLevel }: PriceProps) {
  return (
    <View className='flex flex-row space-x-1'>
      {Array.from({ length: 3 }, (_, index) => (
        <Feather
          key={index}
          name='dollar-sign'
          size={12}
          color={index < priceLevel ? 'black' : '#B9B9B9'}
        />
      ))}
    </View>
  );
}
