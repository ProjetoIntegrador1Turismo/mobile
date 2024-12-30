import React from 'react';
import { View, Pressable } from 'react-native';
import { GuideReviewCommentCardProps } from './GuideReviewCommentCard.types';
import { useGuideReviewCommentCardViewModel } from './GuideReviewCommentCardViewModel';
import { Avatar } from 'src/components/Avatar/Avatar';
import { Stars } from 'src/components/Stars/Stars';
import { CustomText } from 'src/components/Text/CustomText';
import { Entypo } from '@expo/vector-icons';

export function GuideReviewCommentCard({ 
  name, 
  date, 
  text, 
  rating, 
  avatarUrl,
  guide 
}: GuideReviewCommentCardProps) {
  const { handleOptionsPress } = useGuideReviewCommentCardViewModel();

  return (
    <View className='flex max-h-[200px] min-h-[120px] w-[360px] flex-col rounded-lg bg-[#1C1C1E] p-4'>
      <View className='mb-2 flex-row items-center'>
        <CustomText className='text-white mr-2' weight='regular' size={14}>
          Guia:
        </CustomText>
        <Avatar imageUrl={guide.avatarUrl} size={24} />
        <CustomText className='text-primary-500 ml-2' weight='regular' size={14}>
          {guide.name}
        </CustomText>
      </View>
      <View className='flex-row items-center shadow-lg'>
        <View className='mr-4'>
          <Avatar imageUrl={avatarUrl} size={48} />
        </View>
        <View className='flex-1'>
          <CustomText className='text-white' weight='regular' size={16}>
            {name}
          </CustomText>
          <CustomText className='text-gray-400' weight='regular' size={10}>
            Feita em: {date}
          </CustomText>
        </View>
        <View className='flex flex-col items-center'>
          <Stars rating={rating} />
        </View>
      </View>
      <View className='mt-2 flex flex-row items-center p-2'>
        <CustomText
          className='mr-auto line-clamp-4 max-w-[240px] break-words text-gray-200'
          size={12}
          weight='regular'>
          {text}
        </CustomText>
        <Pressable onPress={handleOptionsPress} className='ml-2'>
          <Entypo name='dots-three-horizontal' size={20} color='white' />
        </Pressable>
      </View>
    </View>
  );
}
