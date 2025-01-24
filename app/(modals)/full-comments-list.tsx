import { View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useInterestPointScreenViewModel } from '~/src/screens/InterestPoint/InterestPointScreenViewModel';
import { FullCommentsList } from '~/src/components/Comment/FullCommentsList/FullCommentsList';

export default function FullCommentsListScreen() {
  const router = useRouter();
  const { pointId } = useLocalSearchParams();
  const { comments } = useInterestPointScreenViewModel(Number(pointId));

  return (
    <View className='flex-1 bg-black/50'>
      <FullCommentsList comments={comments || []} onClose={() => router.back()} />
    </View>
  );
}
