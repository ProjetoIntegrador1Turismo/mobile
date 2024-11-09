import { View, Text } from 'react-native';
import React from 'react';
import { AddressLabelProps } from 'src/components/InterestPoint/AddressLabel/AddressLabel.types';
import { CustomText } from 'src/components/Text/CustomText';
import { FontAwesome5 } from '@expo/vector-icons';
import { cn } from 'src/common/utils/cn';

export function AddressLabel({ address, className }: AddressLabelProps) {
  return (
    <View className={cn('my-4 flex flex-row items-center justify-start', className)}>
      <FontAwesome5 name='map-marker-alt' size={24} color='white' />
      <CustomText className='mx-2 text-white' size={10} weight='bold'>
        {address}
      </CustomText>
    </View>
  );
}
