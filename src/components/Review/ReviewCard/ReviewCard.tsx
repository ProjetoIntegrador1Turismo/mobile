import React from 'react';
import { View } from 'react-native';
import { ReviewCardProps } from './ReviewCard.types';
import { CustomText } from 'src/components/Text/CustomText';
import { Stars } from 'src/components/Stars/Stars';
import { Avatar } from 'src/components/Avatar/Avatar';

export function ReviewCard({ touristName, avatarUrl, text, date, rating }: ReviewCardProps) {
  return (
    <View className="w-full rounded-xl border border-white/20 bg-white/5 p-4">
      <View className="mb-4 flex-row items-center justify-between">
        <View className="flex-row items-center gap-x-3">
          <Avatar imageUrl={avatarUrl} size={40} />
          <View>
            <CustomText size={16} weight="bold" className="text-white">
              {touristName}
            </CustomText>
            <CustomText size={12} weight="regular" className="text-gray-400">
              {date}
            </CustomText>
          </View>
        </View>
        <Stars rating={rating} starSize={16} />
      </View>
      <CustomText size={14} weight="regular" className="text-gray-300">
        {text}
      </CustomText>
    </View>
  );
}
