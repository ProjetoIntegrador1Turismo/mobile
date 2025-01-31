import { ScrollView, View, Text, ActivityIndicator, ImageBackground } from 'react-native';
import { useItineraryScreenViewModel } from './ItineraryScreenViewModel';
import type { ItineraryScreenProps } from './ItineraryScreen.types';
import { useAppRouter } from 'src/common/lib/router';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';
import { LogoTl } from 'src/components/Logo/LogoTL';
import { Stars } from 'src/components/Stars/Stars';
import { CustomText } from 'src/components/Text/CustomText';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { SolidButton } from 'src/components/Button/SolidButton/SolidButton';
import { TopGuideCard } from 'src/components/Guide/TopGuideCard/TopGuideCard';
import { ReviewCard } from 'src/components/Review/ReviewCard/ReviewCard';
import { ItineraryPointCard } from 'src/components/Itinerary/ItineraryPointCard/ItineraryPointCard';
import { AverageValue } from 'src/components/Price/AverageValue/AverageValue';
import { BASE_URL } from 'src/common/repositories/client';

export function ItineraryScreen({ itineraryId }: ItineraryScreenProps) {
  const { guide, itinerary, reviews, isLoading, isError } = useItineraryScreenViewModel({
    itineraryId,
  });
  
  const router = useAppRouter();

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center bg-[#171717]'>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (isError || !itinerary || !guide) {
    return (
      <View className='flex-1 items-center justify-center bg-[#171717]'>
        <Text>Error: Itinerary not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      className='flex-1 bg-[#171717]'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
      automaticallyAdjustContentInsets={false}>
      <View className='flex-1'>
        <View className='relative h-24'>
          <View className='absolute left-4 top-12 z-10'>
            <GoBackButton />
          </View>
          <View className='absolute left-0 right-0 top-12 z-0 flex items-center justify-center'>
            <LogoTl />
          </View>
        </View>

        <View className='mt-6 px-6'>
          <CustomText size={24} weight='bold' className='text-white'>
            Roteiro
          </CustomText>
          <CustomText size={20} weight='regular' className='mt-1 text-white'>
            {itinerary.title}
          </CustomText>

          <View className='mt-4'>
            <ImageBackground
              source={{ uri: `${BASE_URL}${itinerary.imageCoverUrl}` }}
              className='h-48 w-full overflow-hidden rounded-xl'
              resizeMode='cover'
            />
          </View>

          <View className='mt-4'>
            <TLGradientButton title='Tenho Interesse!' className='w-full' />
          </View>

          <View className='mt-6 flex-row items-center justify-between'>
            <View>
              <CustomText size={16} weight='regular' className='text-gray-400'>
                Preço:
              </CustomText>
              <View className='flex-row'>
                <AverageValue value={itinerary.mediumCost} />
              </View>
            </View>
            <View>
              <CustomText size={16} weight='regular' className='text-gray-400'>
                Duração:
              </CustomText>
              <CustomText size={20} weight='bold' className='text-white'>
                {itinerary.days} {itinerary.days === 1 ? 'Dia' : 'Dias'}
              </CustomText>
            </View>
          </View>

          <View className='mt-6'>
            <CustomText size={20} weight='bold' className='mb-2 text-white'>
              Descrição
            </CustomText>
            <CustomText size={16} weight='regular' className='text-gray-300'>
              {itinerary.description}
            </CustomText>
          </View>

          <View className='mt-6'>
            <CustomText size={20} weight='bold' className='mb-4 text-white'>
              Ofertado por:
            </CustomText>
            <TopGuideCard
              id={guide.id}
              name={`${guide.firstName} ${guide.lastName}`}
              profileImage={guide.profileImageUrl}
              rating={guide.averageRating}
              onClick={() => router.push(`/(tabs)/(search)/guide-profile/${guide.id}`)}
            />
          </View>

          <View className='mt-6'>
            <CustomText size={20} weight='bold' className='mb-4 text-white'>
              Atrações Incluídas
            </CustomText>
            <View className='gap-y-4'>
              {itinerary.interestPoints.map((point) => (
                <ItineraryPointCard
                  key={point.id}
                  name={point.name}
                  shortDescription={point.shortDescription}
                  imageCoverUrl={point.imageCoverUrl}
                  interestPointType={point.interestPointType}
                  onPress={() => router.push(`/(tabs)/(search)/point/${point.id}`)}
                />
              ))}
            </View>
          </View>

          {reviews && reviews.length > 0 && (
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
                {reviews.length > 3 && (
                  <CustomText className='text-gray-400' size={14} weight='regular'>
                    {reviews.length} avaliações
                  </CustomText>
                )}
              </View>

              <View className='mt-4 gap-y-4'>
                {reviews.slice(0, 3).map((review) => (
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

              {reviews.length > 3 && (
                <View className='mt-4 items-center'>
                  <SolidButton
                    title='Ver mais avaliações'
                    size='sm'
                    color='white'
                    onPress={() =>
                      router.push(`/(modals)/full-reviews-list?itineraryId=${itinerary.id}`)
                    }
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
