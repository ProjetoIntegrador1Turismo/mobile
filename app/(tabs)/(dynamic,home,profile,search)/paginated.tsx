import { useSegments, useLocalSearchParams } from 'expo-router';
import { Pressable } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import { Container } from 'src/components/Container/Container';
import { CustomText } from 'src/components/Text/CustomText';
import CategoryDetailsView from '~/src/screens/Category/CategoryDetails/CategoryDetailsView';

export default function Paginated() {
  const segments = useSegments();
  const { goBack } = useAppRouter();
  const currentTab = segments[1];
  const { pointType } = useLocalSearchParams();

  function normalizeToString(value: string | string[]): string {
    return Array.isArray(value) ? value[0] : value;
  }

  return (
    <Container className='bg-tl-bg p-8'>
      <CategoryDetailsView categoryTitle={normalizeToString(pointType)} />
    </Container>
  );
}
