import { View } from 'react-native';
import React from 'react';
import { CustomText } from 'src/components/Text/CustomText';
import { CommentCard } from 'src/components/Comment/CommentCard/CommentCard';
import { SolidButton } from '~/src/components/Button/SolidButton/SolidButton';
import { useAppRouter } from '~/src/common/lib/router';

interface Comment {
  id: number;
  text: string;
  wasVisitingDate: string;
  rating: number;
  tourist: {
    id: number;
    touristName: string;
    profileImageUrl: string;
  };
}

interface InterestPointCommentsSectionProps {
  comments: Comment[];
  pointId: number;
}

export function InterestPointCommentsSection({
  comments,
  pointId,
}: InterestPointCommentsSectionProps) {
  const hasComments = comments.length > 0;
  const router = useAppRouter();

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
            Avaliações do Usuários!
          </CustomText>
        </View>
        {hasComments && comments.length > 2 && (
          <CustomText className='text-gray-400' size={14} weight='regular'>
            {comments.length} avaliações
          </CustomText>
        )}
      </View>

      <View className='mt-4'>
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
            <SolidButton
              title={`Ver ${comments.length > 2 ? 'mais' : 'todas'} as avaliações`}
              size='sm'
              className='mt-4 self-center px-6'
              py={2}
              onPress={handleSeeMorePress}
            />
          </>
        ) : (
          <View className='mt-2 rounded-xl border border-gray-700 bg-[#1C1C1E] p-4'>
            <CustomText className='text-center text-gray-400' size={14} weight='regular'>
              Nenhuma avaliação foi feita ainda!
            </CustomText>
          </View>
        )}
      </View>
    </View>
  );
}
