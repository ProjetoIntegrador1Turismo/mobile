import { useLocalSearchParams } from 'expo-router';
import { ItineraryScreen } from '~/src/screens/Itinerary/ItineraryScreen';

export default function ItineraryRoute() {
  const { id } = useLocalSearchParams();

  return <ItineraryScreen itineraryId={Number(id)} />;
}
