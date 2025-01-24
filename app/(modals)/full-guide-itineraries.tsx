import { View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useGuideProfileScreenViewModel } from '~/src/screens/GuideProfile/GuideProfileScreenViewModel';
import { FullGuideItineraryList } from '~/src/components/Guide/FullGuideItineraryList/FullGuideItineraryList';

export default function FullGuideItinerariesScreen() {
  const router = useRouter();
  const { guideId } = useLocalSearchParams();
  const { guide } = useGuideProfileScreenViewModel({ guideId: Number(guideId) });

  if (!guide) return null;

  return (
    <View className='flex-1 bg-black/50'>
      <FullGuideItineraryList
        guide={guide}
        itineraries={guide.itineraries}
        onClose={() => router.back()}
      />
    </View>
  );
}
