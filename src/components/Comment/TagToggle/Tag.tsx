import React from 'react';
import { Pressable, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TagProps } from 'src/components/Comment/TagToggle/TagToggle.types';

export function Tag({ label, isSelected, onPress }: TagProps) {
  return (
    <Pressable className='overflow-hidden rounded-md' onPress={onPress}>
      <LinearGradient
        colors={isSelected ? ['#ED0341', '#C60282'] : ['#444444', '#444444']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className='items-center px-4 py-1'>
        <Text className='font-medium text-white'>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}
