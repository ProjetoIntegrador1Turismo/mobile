import { useCallback } from 'react';
import { Alert } from 'react-native';

export function useInterestPointCommentCardViewModel() {
  const handleOptionsPress = useCallback(() => {
    Alert.alert('Opções', 'Em breve você poderá editar ou excluir seu comentário!');
  }, []);

  return {
    handleOptionsPress,
  };
}
