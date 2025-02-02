import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editItinerary } from 'src/common/repositories/Guide/guide.repository';
import Toast from 'react-native-toast-message';

export const useEditItineraryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editItinerary,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guide-itineraries'] });
      queryClient.invalidateQueries({ queryKey: ['category', 'itinerary'] });
      queryClient.invalidateQueries({ queryKey: ['guideProfile'] });
      queryClient.invalidateQueries({ queryKey: ['homePage'] });

      Toast.show({
        type: 'success',
        text1: 'ROTEIRO EDITADO COM SUCESSO',
        position: 'top',
      });
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Erro ao editar roteiro',
        text2: 'Tente novamente mais tarde',
        position: 'top',
      });
    },
  });
};
