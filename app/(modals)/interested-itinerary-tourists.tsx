import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { InterestedTouristsItineraryScreen } from 'src/screens/GuidePainel/InterestedTouristsItineraryScreen/InterestedTouristsItineraryScreen';

export default function InterestedItineraryTouristsScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className='flex-1'>
        <InterestedTouristsItineraryScreen />
      </View>
    </GestureHandlerRootView>
  );
}
