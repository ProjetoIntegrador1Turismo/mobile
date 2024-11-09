import React from 'react';
import { View } from 'react-native';
import { DividerProps } from 'src/components/Divider/Divider.types';
import { CustomText } from '../Text/CustomText';

export function Divider({ text }: DividerProps) {
  return (
    <View className="flex flex-row items-center my-4">
      <View className="flex-1 h-[1px] bg-white"/>

      <CustomText className="text-white mx-2" size={14} weight='bold'>{text}</CustomText>

      <View className="flex-1 h-[1px] bg-white" />
    </View>
  );
}
