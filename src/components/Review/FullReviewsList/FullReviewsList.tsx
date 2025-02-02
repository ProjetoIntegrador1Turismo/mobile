import { View, ScrollView, TouchableOpacity } from 'react-native';
import { CustomText } from '~/src/components/Text/CustomText';
import { AntDesign } from '@expo/vector-icons';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { FullReviewsListProps } from './FullReviewsList.types';

export function FullReviewsList({ reviews, onClose }: FullReviewsListProps) {
  return (
    <View className='flex-1 bg-[#171717] items-center pt-12'>
      <View className='flex-row items-center justify-between border-b border-gray-800 px-4 py-4 w-full'>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name='close' size={24} color='white' />
        </TouchableOpacity>
        <CustomText size={18} weight='bold' className='text-white'>
          Avaliações
        </CustomText>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        className='flex-1 px-4 w-full'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20, alignItems: 'center' }}>
        <CustomText size={16} weight='regular' className='mb-4 text-gray-300'>
          Todas as avaliações deste guia
        </CustomText>

        <View className='gap-y-4 w-full'>
          {reviews.map((review) => (
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
      </ScrollView>
    </View>
  );
}
