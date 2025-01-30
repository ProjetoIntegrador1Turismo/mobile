import { ActivityIndicator, FlatList, View } from 'react-native';
import { Itinerary } from 'src/common/models/GuideItineraries/guideItineraries.model';
import UnauthenticatedImage from 'src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';
import { GuideItineraryActionCard } from 'src/components/Guide/GuideItineraryActionCardList/GuideItineraryActionCard/GuideItineraryActionCard';
import { CustomText } from 'src/components/Text/CustomText';
import { GuidePainelScreenHeaderComponent } from 'src/screens/GuidePainel/GuidePainelScreenHeader/GuidePainelScreenHeaderComponent';

import { useGuidePanel } from '~/src/screens/GuidePainel/GuidePanelScreenViewModel';

export function GuidePanelScreen() {
  const { itineraries, isLoading, handleTouristButtonPress, handleCreateItineraryButtonPress } =
    useGuidePanel();

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center bg-tl-bg'>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <FlatList
      className='w-full bg-tl-bg'
      data={itineraries}
      keyExtractor={(itinerary: Itinerary) => itinerary.id.toString()}
      ListHeaderComponent={
        <View className='pt-10'>
          <GuidePainelScreenHeaderComponent
            onPressTouristsButton={handleTouristButtonPress}
            onPressCreateItineraryButton={handleCreateItineraryButtonPress}
          />
        </View>
      }
      renderItem={({ item }) => (
        <GuideItineraryActionCard
          imageCoverUrl={item.imageCoverUrl}
          title={item.title}
          className='my-3'
        />
      )}
      ListEmptyComponent={
        <View className='items-center justify-center'>
          <UnauthenticatedImage className='h-64 w-64 ' />
          <CustomText className='text-white'>Você ainda não criou nenhum roteiro</CustomText>
        </View>
      }
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View className='h-[150px]' />}
    />
  );
}
