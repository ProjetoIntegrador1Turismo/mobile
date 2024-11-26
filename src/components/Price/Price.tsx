import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PriceProps } from './Price.types';
import { cn } from 'src/common/utils/cn';

export function Price({ priceLevel, variant = 'light', size = 12, className }: PriceProps) {
  const activeColor = variant === 'light' ? 'black' : 'white';
  const inactiveColor = variant === 'light' ? '#B9B9B9' : 'rgba(255, 255, 255, 0.5)';

  return (
    <View className={cn('flex flex-row', className)}>
      {Array.from({ length: 3 }, (_, index) => (
        <Feather
          key={index}
          name='dollar-sign'
          size={size}
          color={index < priceLevel ? activeColor : inactiveColor}
        />
      ))}
    </View>
  );
}
