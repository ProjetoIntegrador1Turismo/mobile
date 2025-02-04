import { View, ScrollView, TouchableOpacity } from 'react-native';
import { CustomText } from '~/src/components/Text/CustomText';
import { AntDesign } from '@expo/vector-icons';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { FullReviewsListProps } from './FullReviewsList.types';

export function FullReviewsList({ reviews, onClose }: FullReviewsListProps) {
  return (
    <View className='flex-1 items-center bg-[#171717] pt-12'>
      <View className='w-full flex-row items-center justify-between border-b border-gray-800 px-4 py-4'>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name='close' size={24} color='white' />
        </TouchableOpacity>
        <CustomText size={18} weight='bold' className='text-white'>
          Avaliações
        </CustomText>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        className='w-full flex-1 px-4'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20, alignItems: 'center' }}>
        <CustomText size={16} weight='regular' className='mb-4 text-gray-300'>
          Todas as avaliações deste guia
        </CustomText>

        <View className='w-full gap-y-4'>
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
