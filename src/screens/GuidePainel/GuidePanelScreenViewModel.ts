import { useState } from 'react';
import { useGuideItinerariesQuery } from 'src/common/hooks/queries/useGuideItinerariesQuery';
import { useDeleteItineraryMutation } from 'src/common/hooks/mutations/useDeleteItineraryMutation';
import { useAppRouter } from 'src/common/lib/router';
import { Itinerary } from 'src/common/models/GuideItineraries/guideItineraries.model';
import { useQueryClient } from '@tanstack/react-query';

export function useGuidePanel() {
  const { data: itineraries, isLoading } = useGuideItinerariesQuery();
  const deleteItineraryMutation = useDeleteItineraryMutation();
  const router = useAppRouter();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedItineraryId, setSelectedItineraryId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const handleTouristButtonPress = () => {
    router.push('(modals)/interested-itinerary-tourists');
  };

  const handleCreateItineraryButtonPress = () => {
    router.push('(tabs)/(dynamic)/create-itinerary-part-one');
  };

  const handleEditItineraryButtonPress = (itineraryId: number) => {
    router.push(`(tabs)/(dynamic)/edit-itinerary-part-one?itineraryId=${itineraryId}`);
  };

  const handleDeletePress = (itineraryId: number) => {
    setSelectedItineraryId(itineraryId);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedItineraryId) {
      await deleteItineraryMutation.mutateAsync(selectedItineraryId);
      queryClient.invalidateQueries({ queryKey: ['category', 'Roteiros'] });
      setDeleteModalVisible(false);
      setSelectedItineraryId(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
    setSelectedItineraryId(null);
  };

  // const notifiedInterestCards = () => {
  //   return itineraries.flatMap((itinerary) =>
  //     itinerary.interestedTourists.map((tourist) => ({
  //       userName: `${tourist.firstName} ${tourist.lastName}`,
  //       imageUrl: tourist.profileImageUrl,
  //       phone: tourist.phone,
  //       email: tourist.email,
  //       itineraryTitle: itinerary.title,
  //     }))
  //   );
  // };

  return {
    itineraries,
    isLoading,
    deleteModalVisible,
    handleTouristButtonPress,
    handleCreateItineraryButtonPress,
    handleEditItineraryButtonPress,
    handleDeletePress,
    handleDeleteConfirm,
    handleDeleteCancel,
  };
}
