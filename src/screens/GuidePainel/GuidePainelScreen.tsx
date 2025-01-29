import { ActivityIndicator, FlatList, View } from 'react-native';
import { Itinerary } from 'src/common/models/GuideItineraries/guideItineraries.model';
import UnauthenticatedImage from 'src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';
import { GuideItineraryActionCard } from 'src/components/Guide/GuideItineraryActionCardList/GuideItineraryActionCard/GuideItineraryActionCard';
import { CustomText } from 'src/components/Text/CustomText';
import { GuidePainelScreenHeaderComponent } from 'src/screens/GuidePainel/GuidePainelScreenHeader/GuidePainelScreenHeaderComponent';
import { useGuidePainel } from 'src/screens/GuidePainel/GuidePainelScreenViewModel';

export function GuidePainelScreen() {
  const { itineraries, isLoading, handleTouristButtonPress } = useGuidePainel();

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <FlatList
      className='w-full'
      data={itineraries}
      keyExtractor={(itinerary: Itinerary) => itinerary.id.toString()}
      ListHeaderComponent={
        <GuidePainelScreenHeaderComponent onPressTouristsButton={handleTouristButtonPress} />
      }
      renderItem={({ item }) => (
        <GuideItineraryActionCard
          imageCoverUrl={item.imageCoverUrl}
          title={item.title}
          className='mb-[10px]'
        />
      )}
      ListEmptyComponent={
        <View className='items-center justify-center'>
          <UnauthenticatedImage className='h-64 w-64 ' />
          <CustomText className='text-white'>Você ainda não criou nenhum roteiro</CustomText>
        </View>
      }
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View className='h-[200px]' />}
    />
  );
}
