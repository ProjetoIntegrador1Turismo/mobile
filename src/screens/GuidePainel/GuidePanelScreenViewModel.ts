import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { useDeleteItineraryMutation } from 'src/common/hooks/mutations/useDeleteItineraryMutation';
import { useGuideItinerariesQuery } from 'src/common/hooks/queries/useGuideItinerariesQuery';
import { useAppRouter } from 'src/common/lib/router';

export function useGuidePanel() {
  const { data: itineraries, isLoading } = useGuideItinerariesQuery();
  const { mutate: deleteItinerary } = useDeleteItineraryMutation();
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
      deleteItinerary(selectedItineraryId, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['guide-itineraries'] });
          queryClient.invalidateQueries({ queryKey: ['guideProfile'] });
          queryClient.invalidateQueries({ queryKey: ['homePage'] });
          queryClient.invalidateQueries({ queryKey: ['interested'] });
          queryClient.invalidateQueries({ queryKey: ['tourPage'] });
          queryClient.invalidateQueries({ queryKey: ['category', 'Roteiros'] });

          Toast.show({
            type: 'success',
            text1: 'Sucesso!',
            text2: 'Roteiro deletado com sucesso',
          });
        },
        onError: () => {
          Toast.show({
            type: 'error',
            text1: 'Erro ao deletar roteiro',
            text2: 'Tente novamente mais tarde',
          });
        },
      });
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
