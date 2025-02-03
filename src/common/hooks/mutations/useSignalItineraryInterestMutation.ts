import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signalItineraryInterest } from '~/src/common/repositories/InterestedItinerary/interested.repository';
import { useAuthStore } from '~/src/common/stores/AuthStore';
import Toast from 'react-native-toast-message';

export function useSignalItineraryInterestMutation(itineraryId: number) {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  return useMutation({
    mutationFn: () => signalItineraryInterest(itineraryId),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Este roteiro foi salvo em seus favoritos e o guia foi notificado do seu interesse!',
      });

      if (user?.email) {
        console.log(user.email);
        queryClient.invalidateQueries({ queryKey: ['GetMe', user.email] });
        queryClient.invalidateQueries({ queryKey: ['interested'] });
      }
    },
    onError: (error: Error) => {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: error.message,
      });
      if (user?.email) {
        console.log(user.email);
        queryClient.invalidateQueries({ queryKey: ['GetMe', user.email] });
        queryClient.invalidateQueries({ queryKey: ['interested'] });
      }
    },
  });
}
