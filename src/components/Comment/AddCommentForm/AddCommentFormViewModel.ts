import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { useCreateCommentMutation } from 'src/common/hooks/mutations/useCreateCommentMutation';
import { AddCommentFormData } from './AddCommentForm.types';
import { useAppRouter } from 'src/common/lib/router';

interface AddCommentViewModelParams {
  interestPointId: number;
}

export function useAddCommentFormViewModel({ interestPointId }: AddCommentViewModelParams) {
  const router = useAppRouter();
  const [rating, setRating] = useState(5);

  const { mutateAsync: createComment, isPending } = useCreateCommentMutation({
    interestPointId,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Comentário enviado com sucesso!',
      });
      router.dismiss();
    },
    onError: (error: any) => {
      if (error?.response?.data?.message?.includes('already created a comment')) {
        Toast.show({
          type: 'error',
          text1: 'Você já comentou neste ponto turístico!',
        });
        return;
      }

      Toast.show({
        type: 'error',
        text1: 'Erro ao enviar comentário',
        text2: 'Tente novamente mais tarde',
      });
    },
  });

  const formatCommentText = (data: AddCommentFormData) => {
    let text = data.comment.trim();

    if (data.likedTags.length > 0) {
      text += '\n\nO que gostei: ' + data.likedTags.join(', ');
    }

    if (data.dislikedTags.length > 0) {
      text += '\n\nO que não gostei: ' + data.dislikedTags.join(', ');
    }

    return text;
  };

  const handleSubmit = async (data: AddCommentFormData) => {
    try {
      const currentDate = new Date().toISOString();
      const formattedText = formatCommentText(data);

      await createComment({
        text: formattedText,
        date: currentDate,
        rating,
      });
    } catch (error: any) {
      if (error?.response?.data?.message?.includes('already created a comment')) {
        Toast.show({
          type: 'error',
          text1: 'Você já comentou neste ponto turístico!',
        });
        return;
      }

      Toast.show({
        type: 'error',
        text1: 'Erro ao enviar comentário',
        text2: 'Tente novamente mais tarde',
      });
    }
  };

  return {
    rating,
    setRating,
    handleSubmit,
    isPending,
  };
}
