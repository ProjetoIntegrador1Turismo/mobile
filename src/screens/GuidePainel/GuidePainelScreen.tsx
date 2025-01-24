import { ActivityIndicator, FlatList, View } from 'react-native';
import { GuideItineraryActionCard } from '~/src/components/Guide/GuideItineraryActionCardList/GuideItineraryActionCard/GuideItineraryActionCard';
import { useGuidePainel } from '~/src/screens/GuidePainel/GuidePainelScreenViewModel';
import { Itinerary } from '~/src/common/models/GuideItineraries/guideItineraries.model';
import { GuidePainelScreenHeaderComponent } from '~/src/screens/GuidePainel/GuidePainelScreenHeader/GuidePainelScreenHeaderComponent';
import UnauthenticatedImage from '~/src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';
import { CustomText } from '~/src/components/Text/CustomText';

interface GuidePainelScreenProps {
  authToken: string;
}

export function GuidePainelScreen({ authToken }: GuidePainelScreenProps) {
  const { itineraries, isLoading, handleTouristButtonPress } = useGuidePainel(authToken);

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
