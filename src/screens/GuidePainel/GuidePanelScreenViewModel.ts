import { useGuideItinerariesQuery } from 'src/common/hooks/queries/useGuideItinerariesQuery';
import { useAppRouter } from 'src/common/lib/router';
import { Itinerary } from 'src/common/models/GuideItineraries/guideItineraries.model';

export function useGuidePanel() {
  const { data, isLoading } = useGuideItinerariesQuery();
  const itineraries: Itinerary[] = data || [];
  const router = useAppRouter();

  const handleTouristButtonPress = () => {
    router.push('(modals)/interested-itinerary-tourists');
  };

  const handleCreateItineraryButtonPress = () => {
    router.push('(tabs)/(dynamic)/create-itinerary-part-one');
  };

  const handleEditItineraryButtonPress = (itineraryId: number) => {
    router.push(`(tabs)/(dynamic)/edit-itinerary-part-one?itineraryId=${itineraryId}`);
  };

  const notifiedInterestCards = () => {
    return itineraries.flatMap((itinerary) =>
      itinerary.interestedTourists.map((tourist) => ({
        userName: `${tourist.firstName} ${tourist.lastName}`,
        imageUrl: tourist.profileImageUrl,
        phone: tourist.phone,
        email: tourist.email,
        itineraryTitle: itinerary.title,
      }))
    );
  };

  return {
    itineraries,
    isLoading,
    handleTouristButtonPress,
    notifiedInterestCards,
    handleCreateItineraryButtonPress,
    handleEditItineraryButtonPress
  };
}
