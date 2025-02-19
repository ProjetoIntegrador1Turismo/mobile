import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { CustomText } from 'src/components/Text/CustomText';
import { CommentCard } from 'src/components/Comment/CommentCard/CommentCard';
import { GradientBorderButton } from '~/src/components/Button/GradientBorderButton/GradientBorderButton';
import { useAppRouter } from '~/src/common/lib/router';
import { InterestPointCommentsSectionProps } from './InterestPointCommentsSection.types';
import { useAuthStore } from '~/src/common/stores/AuthStore';

export function InterestPointCommentsSection({
  comments,
  pointId,
  onAddCommentPress,
}: InterestPointCommentsSectionProps) {
  const hasComments = comments.length > 0;
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useAppRouter();
  const isGuide = useAuthStore((state) => state.user)?.userType === 'Guide';

  const handleSeeMorePress = () => {
    router.push(`/(modals)/full-comments-list?pointId=${pointId}`);
  };

  return (
    <View className='flex w-full flex-col'>
      <View className='flex flex-row items-center justify-between'>
        <View>
          <CustomText className='text-white' size={24} weight='bold'>
            Comentários:
          </CustomText>
          <CustomText className='text-white' size={14} weight='regular'>
            Comentários dos Usuários!
          </CustomText>
        </View>
        <View className='flex-row items-center gap-x-4'>
          {hasComments && comments.length > 2 && (
            <CustomText className='text-gray-400' size={14} weight='regular'>
              {comments.length} Comentários
            </CustomText>
          )}
          {isAuthenticated && !isGuide && (
            <TouchableOpacity
              className='h-10 w-10 items-center justify-center rounded-full bg-zinc-800'
              onPress={onAddCommentPress}>
              <AntDesign name='plus' size={24} color='white' />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View className='mt-4 min-w-full'>
        {hasComments ? (
          <>
            {comments.slice(0, 2).map((comment) => (
              <View key={comment.id} className='mb-2'>
                <CommentCard
                  name={comment.tourist.touristName}
                  date={comment.wasVisitingDate}
                  text={comment.text}
                  rating={comment.rating}
                  avatarUrl={comment.tourist.profileImageUrl}
                />
              </View>
            ))}
            <GradientBorderButton
              title='Ver mais comentários'
              className='mt-4 self-center'
              onPress={handleSeeMorePress}
            />
          </>
        ) : (
          <View className='mt-2 w-full rounded-xl border border-gray-700 bg-[#1C1C1E] p-4'>
            <CustomText className='text-center text-gray-400' size={14} weight='regular'>
              Nenhuma avaliação foi feita ainda!
            </CustomText>
          </View>
        )}
      </View>
    </View>
  );
}
