import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useGuideProfileScreenViewModel } from './GuideProfileScreenViewModel';
import type { GuideProfileScreenProps } from './GuideProfileScreen.types';
import { useAppRouter } from 'src/common/lib/router';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';
import { LogoTl } from 'src/components/Logo/LogoTL';
import { Stars } from 'src/components/Stars/Stars';
import { CustomText } from 'src/components/Text/CustomText';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { GradientBorderButton } from 'src/components/Button/GradientBorderButton/GradientBorderButton';
import { GuideItineraryCard } from 'src/components/Guide/GuideItineraryCard/GuideItineraryCard';
import { ReviewCard } from 'src/components/Review/ReviewCard/ReviewCard';
import { Avatar } from 'src/components/Avatar/Avatar';
import { BASE_URL } from 'src/common/repositories/client';

export function GuideProfileScreen({ guideId }: GuideProfileScreenProps) {
  const { guide, isLoading, isError } = useGuideProfileScreenViewModel({ guideId });
  const { goBack } = useAppRouter();
  const router = useAppRouter();

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (isError || !guide) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>Error: Guide not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      className='flex-1'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
      automaticallyAdjustContentInsets={false}>
      <View className='flex-1'>
      <View className='flex-row items-center justify-between px-4 pt-12'>
          <View className='flex-1'>
            <GoBackButton />
          </View>
          
          <View className='flex-1 items-center justify-center'>
            <LogoTl />
          </View>
          <View className='flex-1' />
        </View>

        <View className='items-center px-6 pt-12'>
          <Avatar size={120} imageUrl={guide.profileImageUrl} />

          <CustomText size={24} weight='bold' className='mt-4 text-center text-white'>
            {`${guide.firstName} ${guide.lastName}`}
          </CustomText>

          <View className='mt-2'>
            <CustomText size={16} weight='regular' className='text-center text-gray-300'>
              {guide.cadasturCode}
            </CustomText>
          </View>

          <Stars
            rating={guide.averageRating}
            label='Avaliação geral:'
            className='mt-4'
            starSize={20}
            textSize={16}
          />

          <View className='mt-8 w-full'>
            <TLGradientButton 
              title='Avaliar este Guia!' 
              className='w-full'
              onPress={() => router.push(`/(modals)/add-review?guideId=${guideId}`)}
            />
          </View>

          {guide.itineraries.length > 0 && (
            <View className='mt-8 w-full'>
              <View className='flex-row items-center justify-between'>
                <CustomText size={20} weight='bold' className='text-white'>
                  Roteiros do Guia
                </CustomText>
                {guide.itineraries.length > 3 && (
                  <CustomText className='text-gray-400' size={14} weight='regular'>
                    {guide.itineraries.length} roteiros
                  </CustomText>
                )}
              </View>

              <View className='mt-4 gap-y-4'>
                {guide.itineraries.slice(0, 3).map((itinerary) => (
                  <GuideItineraryCard
                    guide={{
                      name: guide.firstName + ' ' + guide.lastName,
                      profileImage: guide.profileImageUrl,
                    }}
                    key={itinerary.id}
                    title={itinerary.title}
                    backgroundImage={`${BASE_URL}${itinerary.imageCoverUrl}`}
                    itineraryId={itinerary.id}
                  />
                ))}
              </View>

              {guide.itineraries.length > 3 && (
                <View className='mt-4 items-center'>
                  <GradientBorderButton
                    title='Ver mais roteiros'
                    className='mt-4 self-center'
                    onPress={() =>
                      router.push(`/(modals)/full-guide-itineraries?guideId=${guide.id}`)
                    }
                  />
                </View>
              )}
            </View>
          )}

          {guide.reviews.length > 0 && (
            <View className='mt-8 w-full'>
              <View className='flex-row items-center justify-between'>
                <View>
                  <CustomText className='text-white' size={24} weight='bold'>
                    Avaliações
                  </CustomText>
                  <CustomText className='text-white' size={14} weight='regular'>
                    O que os turistas acharam!
                  </CustomText>
                </View>
                {guide.reviews.length > 3 && (
                  <CustomText className='text-gray-400' size={14} weight='regular'>
                    {guide.reviews.length} avaliações
                  </CustomText>
                )}
              </View>

              <View className='mt-4 gap-y-4'>
                {guide.reviews.slice(0, 3).map((review) => (
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

              {guide.reviews.length > 3 && (
                <View className='mt-4 items-center'>
                  <GradientBorderButton
                    title='Ver mais avaliações'
                    className='mt-4 self-center'
                    onPress={() => router.push(`/(modals)/full-reviews-list?guideId=${guide.id}`)}
                  />
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
