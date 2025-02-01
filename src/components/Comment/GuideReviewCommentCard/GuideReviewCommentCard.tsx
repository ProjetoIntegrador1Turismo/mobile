import React, { useState } from 'react';
import { View, Pressable, TouchableOpacity } from 'react-native';
import { GuideReviewCommentCardProps } from './GuideReviewCommentCard.types';
import { useGuideReviewCommentCardViewModel } from './GuideReviewCommentCardViewModel';
import { Avatar } from 'src/components/Avatar/Avatar';
import { Stars } from 'src/components/Stars/Stars';
import { CustomText } from 'src/components/Text/CustomText';
import { Entypo } from '@expo/vector-icons';
import { PopupMenu } from 'src/components/PopupMenu/PopupMenu';

export function GuideReviewCommentCard({
  name,
  date,
  text,
  rating,
  avatarUrl,
  guide,
  reviewId,
  guideId,
}: GuideReviewCommentCardProps) {
  const { handleDelete } = useGuideReviewCommentCardViewModel({
    guideId,
    reviewId,
  });
  const [menuVisible, setMenuVisible] = useState(false);
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
        <View className='mb-2 flex-row items-center'>
          <CustomText className='mr-2 text-white' weight='regular' size={14}>
            Guia:
          </CustomText>
          <Avatar imageUrl={guide.avatarUrl} size={24} />
          <CustomText className='ml-2 text-white' weight='regular' size={14}>
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
        onDelete={() => handleDelete({ guideId, reviewId })}
        position={menuPosition}
      />
    </>
  );
}
