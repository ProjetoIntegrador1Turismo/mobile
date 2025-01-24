import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { CustomText } from 'src/components/Text/CustomText';
import { CommentCard } from 'src/components/Comment/CommentCard/CommentCard';
import { FullCommentsListProps } from './FullCommentsList.types';
import { AntDesign } from '@expo/vector-icons';
import { useFullCommentsListViewModel } from './FullCommentsListViewModel';

export function FullCommentsList({ comments, onClose }: FullCommentsListProps) {
  const { handleClose } = useFullCommentsListViewModel({ onClose });

  return (
    <View className="flex-1 bg-[#171717] pt-12">
      <View className="flex-row items-center justify-between border-b border-gray-800 px-4 py-4">
        <TouchableOpacity onPress={handleClose}>
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
        <CustomText size={18} weight="bold" className="text-white">
          Avaliações
        </CustomText>
        <View style={{ width: 24 }} />
      </View>
      
      <ScrollView 
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <CustomText size={16} weight="regular" className="mb-4 text-gray-300">
          {comments.length} avaliações de visitantes
        </CustomText>

        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <View key={comment.id} className="mb-3">
              <CommentCard
                name={comment.tourist.touristName}
                date={comment.wasVisitingDate}
                text={comment.text}
                rating={comment.rating}
                avatarUrl={comment.tourist.profileImageUrl}
              />
            </View>
          ))
        ) : (
          <View className="mt-2 rounded-xl border border-gray-700 bg-[#1C1C1E] p-4">
            <CustomText className="text-center text-gray-400" size={14} weight="regular">
              Nenhuma avaliação disponível ainda!
            </CustomText>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
