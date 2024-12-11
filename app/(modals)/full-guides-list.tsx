import { View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useInterestPointScreenViewModel } from '~/src/screens/InterestPoint/InterestPointScreenViewModel';
import { FullGuidesList } from '~/src/components/Guide/FullGuidesList/FullGuidesList';

export default function FullGuidesListScreen() {
  const router = useRouter();
  const { pointId } = useLocalSearchParams();
  const { guides } = useInterestPointScreenViewModel(Number(pointId));

  return (
    <View className='flex-1 bg-black/50'>
      <FullGuidesList guides={guides || []} onClose={() => router.back()} />
    </View>
  );
}
