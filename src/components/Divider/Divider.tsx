import React from 'react';
import { View } from 'react-native';
import { DividerProps } from 'src/components/Divider/Divider.types';
import { CustomText } from '../Text/CustomText';

export function Divider({ text, weight }: DividerProps) {
  return (
    <View className='my-4 flex flex-row items-center'>
      <View className='h-[1px] flex-1 bg-white' />

      <CustomText className='mx-2 text-white' size={14} weight={weight || 'regular'}>
        {text}
      </CustomText>

      <View className='h-[1px] flex-1 bg-white' />
    </View>
  );
}
