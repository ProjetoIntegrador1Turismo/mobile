import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PriceProps } from 'src/components/Price/Price.types';
import { cn } from 'src/common/utils/cn';

export function Price({ priceLevel, className }: PriceProps) {
  return (
    <View className={cn('flex flex-row space-x-1', className)}>
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
