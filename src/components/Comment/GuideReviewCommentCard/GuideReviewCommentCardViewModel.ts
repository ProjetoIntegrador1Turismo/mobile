import { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDeleteReviewMutation } from '~/src/common/hooks/mutations/useDeleteReviewMutation';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';

interface UseGuideReviewCommentCardViewModelProps {
  guideId: number;
  reviewId: number;
}

export function useGuideReviewCommentCardViewModel({
  guideId,
  reviewId,
}: UseGuideReviewCommentCardViewModelProps) {
  const handleOptionsPress = useCallback(() => {
    Alert.alert('Opções', 'Em breve você poderá editar ou excluir seu comentário!');
  }, []);

  const { mutate: deleteReview } = useDeleteReviewMutation({
    guideId,
    onSuccess: () => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Review deletado com sucesso!',
      });
    },
    onError: (error: any) => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: error?.response?.data?.message === 'Authenticated Tourist dont have one review with id: ' + reviewId
          ? 'Você não tem permissão para deletar este review.'
          : error?.response?.data?.message || 'Erro ao deletar review. Tente novamente.',
      });
    },
  });

  const handleDelete = () => {
    deleteReview(reviewId);
  };

  return {
    handleOptionsPress,
    handleDelete,
  };
}
