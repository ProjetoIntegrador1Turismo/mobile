import React from 'react';
import { View, Pressable } from 'react-native';
import { CommentProps } from 'src/components/Comment/Comment.types';
import { useCommentViewModel } from 'src/components/Comment/CommentViewModel';
import { Avatar } from 'src/components/Avatar/Avatar';
import { Stars } from 'src/components/Stars/Stars';
import { CustomText } from 'src/components/Text/CustomText';
import { Entypo } from '@expo/vector-icons';

export default function Comment(props: CommentProps) {
  const { name, date, text, rating, avatarUrl } = useCommentViewModel(props);

  return (
    <View className='flex max-h-[180px] min-h-[100px] w-[360px] flex-col rounded-lg bg-[#1C1C1E] p-4'>
      <View className='flex-row items-center shadow-lg'>
        <View className='mr-4'>
          <Avatar imageUrl={avatarUrl} size={48} />
        </View>
        <View className='flex-1'>
          <CustomText className='font-semibold text-white' size={16}>
            {name}
          </CustomText>
          <CustomText className='text-gray-400' size={10}>
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
          size={12}>
          {text}
        </CustomText>
        <Pressable onPress={() => {}} className='ml-2'>
          <Entypo name='dots-three-horizontal' size={20} color='white' />
        </Pressable>
      </View>
    </View>
  );
}
