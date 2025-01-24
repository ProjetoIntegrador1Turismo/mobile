import { useLocalSearchParams, useSegments } from 'expo-router';
import { useAppRouter } from 'src/common/lib/router';
import { SafeAreaView } from 'react-native';
import { GuideProfileScreen } from '~/src/screens/GuideProfile/GuideProfileScreen';

export default function GuideProfileDetails() {
  const segments = useSegments();
  const { id } = useLocalSearchParams();
  const { goBack } = useAppRouter();
  const currentTab = segments[1];

  return (
    <SafeAreaView className='flex-1 bg-tl-bg'>
      <GuideProfileScreen guideId={Number(id)} />
    </SafeAreaView>
  );
}
