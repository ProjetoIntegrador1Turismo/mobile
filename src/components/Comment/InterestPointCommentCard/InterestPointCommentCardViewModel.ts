import { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDeleteCommentMutation } from '~/src/common/hooks/mutations/useDeleteCommentMutation';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';

interface UseInterestPointCommentCardViewModelProps {
  pointId: number;
  commentId: number;
}

export function useInterestPointCommentCardViewModel({
  pointId,
  commentId,
}: UseInterestPointCommentCardViewModelProps) {
  const { mutate: deleteComment } = useDeleteCommentMutation({
    pointId,
    onSuccess: () => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Comentário deletado com sucesso!',
      });
    },
    onError: () => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Erro ao deletar comentário. Tente novamente.',
      });
    },
  });

  const handleOptionsPress = useCallback(() => {
    Alert.alert('Opções', 'Em breve você poderá editar ou excluir seu comentário!');
  }, []);

  const handleDelete = () => {
    deleteComment(commentId);
  };

  return {
    handleOptionsPress,
    handleDelete,
  };
}
