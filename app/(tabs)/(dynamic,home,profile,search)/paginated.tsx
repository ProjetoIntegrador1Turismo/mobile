import { useSegments, useLocalSearchParams } from 'expo-router';
import { Pressable } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import { SafeAreaView } from 'react-native';
import { CustomText } from 'src/components/Text/CustomText';
import CategoryDetailsView from '~/src/screens/Category/CategoryDetails/CategoryDetailsScreen';

export default function Paginated() {
  const segments = useSegments();
  const { goBack } = useAppRouter();
  const currentTab = segments[1];
  const { pointType } = useLocalSearchParams();

  // function normalizeToString(value: string | string[]): string {
  //   return Array.isArray(value) ? value[0] : value;
  // }

  return (
    <SafeAreaView className='flex-1 bg-tl-bg'>
      <CategoryDetailsView categoryTitle={String(pointType)} />
    </SafeAreaView>
  );
}
