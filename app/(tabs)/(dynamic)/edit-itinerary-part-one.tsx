import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function EditItineraryPartOne() {
  const { itineraryId } = useLocalSearchParams<{ itineraryId: string }>();

  return (
    <View>
      <Text>edit-itinerary-part-one</Text>
    </View>
  );
}
