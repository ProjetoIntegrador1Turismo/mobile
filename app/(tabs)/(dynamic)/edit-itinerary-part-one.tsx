import { useLocalSearchParams } from 'expo-router';
import EditItineraryStepOneView from 'src/screens/EditItinerary/EditItineraryStepOneView/EditItineraryStepOneView';

export default function EditItineraryPartOne() {
  const { itineraryId } = useLocalSearchParams<{ itineraryId: string }>();

  return <EditItineraryStepOneView itineraryId={itineraryId} />;
}
