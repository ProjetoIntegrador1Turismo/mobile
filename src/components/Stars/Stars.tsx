import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { CustomText } from 'src/components/Text/CustomText';
import { StarsProps } from 'src/components/Stars/Stars.types';
import { useStarsViewModel } from 'src/components/Stars/StarsViewModel';
import { cn } from 'src/common/utils/cn';

export function Stars({
  rating,
  label = 'Avaliação:',
  starSize = 14,
  starColor = '#FF007F',
  textSize = 12,
  className,
}: StarsProps) {
  const { stars } = useStarsViewModel(rating);

  return (
    <View className={cn('flex flex-col items-center', className)}>
      {label && (
        <View className='mb-1'>
          <CustomText className='text-white' size={textSize} weight='regular'>
            {label}
          </CustomText>
        </View>
      )}
      <View className='flex flex-row space-x-1'>
        {stars.map((filled, index) => (
          <AntDesign key={index} name='star' size={starSize} color={filled ? starColor : 'gray'} />
        ))}
      </View>
    </View>
  );
}
