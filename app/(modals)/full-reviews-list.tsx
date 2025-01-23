import { View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useGuideProfileScreenViewModel } from '~/src/screens/GuideProfile/GuideProfileScreenViewModel';
import { FullReviewsList } from '~/src/components/Review/FullReviewsList/FullReviewsList';

export default function FullReviewsListScreen() {
  const router = useRouter();
  const { guideId } = useLocalSearchParams();
  const { guide } = useGuideProfileScreenViewModel({ guideId: Number(guideId) });

  return (
    <View className='flex-1 bg-black/50'>
      <FullReviewsList reviews={guide?.reviews || []} onClose={() => router.back()} />
    </View>
  );
}
