import React, { useState } from 'react';
import { View, Pressable, TouchableOpacity } from 'react-native';
import { InterestPointCommentCardProps } from './InterestPointCommentCard.types';
import { useInterestPointCommentCardViewModel } from './InterestPointCommentCardViewModel';
import { Avatar } from 'src/components/Avatar/Avatar';
import { Stars } from 'src/components/Stars/Stars';
import { CustomText } from 'src/components/Text/CustomText';
import { Entypo } from '@expo/vector-icons';
import { PopupMenu } from 'src/components/PopupMenu/PopupMenu';
import { FullCommentModal } from '../FullCommentModal/FullCommentModal';

export function InterestPointCommentCard({
  name,
  date,
  text,
  rating,
  avatarUrl,
  interestPoint,
  commentId,
}: InterestPointCommentCardProps) {
  const { handleDelete } = useInterestPointCommentCardViewModel({
    pointId: interestPoint.id,
    commentId,
  });

  const [menuVisible, setMenuVisible] = useState(false);
  const [fullModalVisible, setFullModalVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleMorePress = (event: any) => {
    const { pageX, pageY } = event.nativeEvent;
    setMenuPosition({ x: pageX, y: pageY });
    setMenuVisible(true);
  };

  const handleDeletePress = () => {
    handleDelete();
    setMenuVisible(false);
  };

  return (
    <>
      <View className='flex max-h-[200px] min-h-[120px] w-[360px] flex-col rounded-lg bg-[#1C1C1E] p-4'>
        <View className='mb-2'>
          <CustomText className='text-white' weight='regular' size={14}>
            {interestPoint.name}
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
          <TouchableOpacity
            onPress={handleMorePress}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}>
            <Entypo name='dots-three-horizontal' size={20} color='white' />
          </TouchableOpacity>
        </View>
      </View>
      <PopupMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onDelete={handleDeletePress}
        onViewFull={() => {
          setMenuVisible(false);
          setFullModalVisible(true);
        }}
        position={menuPosition}
      />
      <FullCommentModal
        visible={fullModalVisible}
        onClose={() => setFullModalVisible(false)}
        name={name}
        date={date}
        text={text}
        rating={rating}
        avatarUrl={avatarUrl}
        isReview={false}
      />
    </>
  );
}
