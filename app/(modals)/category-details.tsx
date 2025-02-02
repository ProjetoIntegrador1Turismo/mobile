import { useLocalSearchParams } from 'expo-router';
import InterestPointCategoryDetailsView from 'src/screens/NewItinerary/CategoryDetailView/InterestPointCategoryDetailsView';

export default function SelectInterestPointModal() {
  const { pointType } = useLocalSearchParams();

  return <InterestPointCategoryDetailsView categoryTitle={pointType.toString()} />;
}
