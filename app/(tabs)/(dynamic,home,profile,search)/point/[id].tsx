import { useLocalSearchParams, useSegments } from 'expo-router';
import { useAppRouter } from 'src/common/lib/router';
import { SafeAreaView } from 'react-native';
import { InterestPointScreen } from '~/src/screens/InterestPoint/InterestPointScreen';

export default function PointDetails() {
  const segments = useSegments();
  const { id } = useLocalSearchParams();
  const { goBack } = useAppRouter();
  const currentTab = segments[1];

  return (
    <SafeAreaView className='flex-1 bg-tl-bg'>
      <InterestPointScreen pointId={Number(id)} />
    </SafeAreaView>
  );
}
