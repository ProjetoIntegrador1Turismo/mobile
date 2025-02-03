import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { ReviewCardProps } from './ReviewCard.types';
import { CustomText } from 'src/components/Text/CustomText';
import { Stars } from 'src/components/Stars/Stars';
import { Avatar } from 'src/components/Avatar/Avatar';
import { Entypo } from '@expo/vector-icons';
import { FullCommentModal } from 'src/components/Comment/FullCommentModal/FullCommentModal';

export function ReviewCard({ touristName, avatarUrl, text, date, rating }: ReviewCardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <View className='flex max-h-[180px] min-h-[100px] w-[360px] flex-col rounded-lg bg-[#1C1C1E] p-4'>
      <View className='flex-row items-center shadow-lg'>
        <View className='mr-4'>
          <Avatar imageUrl={avatarUrl} size={48} />
        </View>
        <View className='flex-1'>
          <CustomText className='text-white' weight='regular' size={16}>
            {touristName}
          </CustomText>
          <CustomText className='text-gray-400' weight='regular' size={10}>
            Avaliou em: {formatDate(date)}
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
        <Pressable onPress={() => setModalVisible(true)} className='ml-2'>
          <Entypo name='dots-three-horizontal' size={20} color='white' />
        </Pressable>
      </View>
      {modalVisible && (
        <FullCommentModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          name={touristName}
          date={date}
          text={text}
          rating={rating}
          avatarUrl={avatarUrl}
          isReview={true}
        />
      )}
    </View>
  );
}
