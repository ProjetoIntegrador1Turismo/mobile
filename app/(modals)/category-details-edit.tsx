import { useLocalSearchParams } from 'expo-router';
import InterestPointCategoryDetailsEditView from 'src/screens/EditItinerary/InterestPointCategoryDetailEditView/InterestPointCategoryDetailEditView';

export default function SelectInterestPointModal() {
  const { pointType } = useLocalSearchParams();

  return <InterestPointCategoryDetailsEditView categoryTitle={pointType.toString()} />;
}
