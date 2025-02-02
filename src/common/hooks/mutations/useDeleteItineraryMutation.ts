import { useMutation, useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { deleteItinerary } from 'src/common/repositories/GuideItineraries/guideItineraries.repository';

export function useDeleteItineraryMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteItinerary,
    onSuccess: () => {
      // Invalidate all related queries
      queryClient.invalidateQueries({ queryKey: ['guide-itineraries'] });
      queryClient.invalidateQueries({ queryKey: ['category', 'itinerary'] });
      queryClient.invalidateQueries({ queryKey: ['guide-itineraries'] });
      queryClient.invalidateQueries({ queryKey: ['guideProfile'] });
      queryClient.invalidateQueries({ queryKey: ['homePage'] });
      queryClient.invalidateQueries({ queryKey: ['interested'] });
      queryClient.invalidateQueries({ queryKey: ['tourPage'] });

      Toast.show({
        type: 'success',
        text1: 'ROTEIRO DELETADO COM SUCESSO',
        position: 'top',
      });
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Erro ao deletar roteiro',
        text2: 'Tente novamente mais tarde',
        position: 'top',
      });
    },
  });
}
