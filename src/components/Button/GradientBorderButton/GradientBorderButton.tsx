import { GradientBorderButtonProps } from '~/src/components/Button/GradientBorderButton/GradientBorderButton.types'
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomText } from '~/src/components/Text/CustomText';
import { cn } from '~/src/common/utils/cn';

export function GradientBorderButton({
  title,
  icon,
  className,
  onPress,
}: GradientBorderButtonProps) {

  return (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    className={cn("rounded-lg", className)}
    style={{
      overflow: 'hidden', 
    }}
  >
    <LinearGradient
      colors={['#ff0000', '#800080']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="rounded-lg p-0.5"
    >
      <View className="bg-black rounded-lg flex-row items-center justify-center py-3 px-5">
        <CustomText className="text-white" size={14} weight="bold">
          {title}
        </CustomText>
        {icon && <View className="ml-2 mb-[4px]">{icon}</View>}
      </View>
    </LinearGradient>
  </TouchableOpacity>
  );
}

