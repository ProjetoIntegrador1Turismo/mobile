import { View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useItineraryScreenViewModel } from '~/src/screens/Itinerary/ItineraryScreenViewModel';
import { FullReviewsList } from '~/src/components/Review/FullReviewsList/FullReviewsList';

export default function FullItineraryReviewsScreen() {
  const router = useRouter();
  const { itineraryId } = useLocalSearchParams();
  const { reviews } = useItineraryScreenViewModel({ itineraryId: Number(itineraryId) });

  return (
    <View className='flex-1 bg-black/50'>
      <FullReviewsList reviews={reviews || []} onClose={() => router.back()} />
    </View>
  );
}
