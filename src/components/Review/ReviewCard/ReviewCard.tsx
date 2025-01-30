import React from 'react';
import { View } from 'react-native';
import { ReviewCardProps } from './ReviewCard.types';
import { CustomText } from 'src/components/Text/CustomText';
import { Stars } from 'src/components/Stars/Stars';
import { Avatar } from 'src/components/Avatar/Avatar';

export function ReviewCard({ touristName, avatarUrl, text, date, rating }: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <View className='w-full rounded-xl border border-white/20 bg-white/5 p-4'>
      <View className='mb-4 flex-row items-center justify-between'>
        <View className='flex-1 flex-row items-center gap-x-3'>
          <Avatar imageUrl={avatarUrl} size={40} />
          <View className='flex-1'>
            <CustomText size={16} weight='bold' className='text-white' numberOfLines={1}>
              {touristName}
            </CustomText>
            <CustomText size={12} weight='regular' className='text-gray-400'>
              {formatDate(date)}
            </CustomText>
          </View>
        </View>
        <Stars rating={rating} starSize={16} />
      </View>
      <CustomText size={14} weight='regular' className='text-gray-300' style={{ flexWrap: 'wrap' }}>
        {text}
      </CustomText>
    </View>
  );
}
