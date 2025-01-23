import React from 'react';
import { View } from 'react-native';
import { GuideReviewsSectionProps } from './GuideReviewsSection.types';
import { CustomText } from 'src/components/Text/CustomText';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { useAppRouter } from 'src/common/lib/router';

export function GuideReviewsSection({ reviews, guideId }: GuideReviewsSectionProps) {
  const router = useAppRouter();
  const hasReviews = reviews.length > 0;

  const handleSeeMorePress = () => {
    router.push(`/(modals)/full-reviews-list?guideId=${guideId}`);
  };

  if (!hasReviews) return null;

  return (
    <View className='w-full'>
      <View className='flex-row items-center justify-between'>
        <View>
          <CustomText className='text-white' size={24} weight='bold'>
            Avaliações
          </CustomText>
          <CustomText className='text-white' size={14} weight='regular'>
            O que os turistas acharam!
          </CustomText>
        </View>
        {reviews.length > 2 && (
          <CustomText className='text-gray-400' size={14} weight='regular'>
            {reviews.length} avaliações
          </CustomText>
        )}
      </View>

      <View className='mt-4 gap-y-4'>
        {reviews.slice(0, 2).map((review) => (
          <ReviewCard
            key={review.id}
            touristName={review.touristName}
            avatarUrl={review.avatarUrl}
            text={review.text}
            date={review.date}
            rating={review.rating}
          />
        ))}
      </View>

      {reviews.length > 2 && (
        <View className='mt-4'>
          <CustomText className='text-primary' size={14} weight='bold' onPress={handleSeeMorePress}>
            Ver mais avaliações
          </CustomText>
        </View>
      )}
    </View>
  );
}
