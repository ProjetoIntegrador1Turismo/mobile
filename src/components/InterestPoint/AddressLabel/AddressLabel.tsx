import { View, Text } from 'react-native';
import React from 'react';
import { AddressLabelProps } from 'src/components/InterestPoint/AddressLabel/AddressLabel.types';
import { CustomText } from 'src/components/Text/CustomText';
import { FontAwesome5 } from '@expo/vector-icons';
import { cn } from 'src/common/utils/cn';

export function AddressLabel({ address, className }: AddressLabelProps) {
  return (
    <View className={cn('flex flex-col', className)}>
      <View className='max-w-[300px] flex-row items-start'>
        <FontAwesome5 name='map-marker-alt' size={24} color='white' className='mr-2' />
        <CustomText className='text-white' size={16} weight='bold'>
          {address}
        </CustomText>
      </View>
    </View>
  );
}
