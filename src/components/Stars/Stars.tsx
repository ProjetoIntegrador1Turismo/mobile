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
  className,
}: StarsProps) {
  const { stars } = useStarsViewModel(rating);

  return (
    <View className={cn('flex flex-col items-center space-x-1', className)}>
      {label && (
        <CustomText className='text-white' size={12} weight='regular'>
          {label}
        </CustomText>
      )}
      <View className='flex flex-row'>
        {stars.map((filled, index) => (
          <AntDesign key={index} name='star' size={starSize} color={filled ? starColor : 'gray'} />
        ))}
      </View>
    </View>
  );
}
