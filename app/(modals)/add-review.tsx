import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { AddReviewForm } from 'src/components/Review/AddReviewForm/AddReviewForm';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function AddReviewModal() {
  const { guideId } = useLocalSearchParams<{ guideId: string }>();

  if (!guideId) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AddReviewForm guideId={Number(guideId)} />
    </GestureHandlerRootView>
  );
}
