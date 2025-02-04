import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewItinerary } from 'src/common/repositories/Guide/guide.repository';
import Toast from 'react-native-toast-message';

export const useCreateItineraryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewItinerary,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guide-itineraries'] });
      queryClient.invalidateQueries({ queryKey: ['category', 'itinerary'] });
      queryClient.invalidateQueries({ queryKey: ['guideProfile'] });
      queryClient.invalidateQueries({ queryKey: ['homePage'] });
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar roteiro',
        text2: 'Tente novamente mais tarde',
        position: 'top',
      });
    },
  });
};
