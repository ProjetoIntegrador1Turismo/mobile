import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AddCommentForm } from '~/src/components/Comment/AddCommentForm/AddCommentForm';

export default function AddCommentScreen() {
  const { pointId } = useLocalSearchParams();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className='flex-1 bg-black/50'>
        <AddCommentForm pointId={Number(pointId)} />
      </View>
    </GestureHandlerRootView>
  );
}
