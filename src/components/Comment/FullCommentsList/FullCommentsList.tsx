import React from 'react';
import { View, ScrollView } from 'react-native';
import { CustomText } from 'src/components/Text/CustomText';
import { CommentCard } from 'src/components/Comment/CommentCard/CommentCard';
import { FullCommentsListProps } from './FullCommentsList.types';

export function FullCommentsList({ comments, onClose }: FullCommentsListProps) {
  return (
    <View className="flex-1 bg-[#1C1C1E] rounded-t-3xl mt-20">
      <View className="flex-row justify-between items-center p-6 border-b border-gray-800">
        <CustomText size={20} weight="bold" className="text-white">
          Reviews:
        </CustomText>
        <CustomText className='text-gray-400' size={14} weight='regular'>
          {comments.length} avaliações
        </CustomText>
      </View>
      
      <ScrollView 
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20, gap: 16 }}
      >
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            name={comment.tourist.touristName}
            date={comment.wasVisitingDate}
            text={comment.text}
            rating={comment.rating}
            avatarUrl={comment.tourist.profileImageUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
}
