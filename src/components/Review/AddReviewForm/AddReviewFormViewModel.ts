import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { useCreateReviewMutation } from 'src/common/hooks/mutations/useCreateReviewMutation';
import { AddReviewFormData } from './AddReviewForm.types';
import { useAppRouter } from 'src/common/lib/router';

interface AddReviewViewModelParams {
  guideId: number;
}

export function useAddReviewFormViewModel({ guideId }: AddReviewViewModelParams) {
  const router = useAppRouter();
  const [rating, setRating] = useState(5);

  const { mutateAsync: createReview, isPending } = useCreateReviewMutation({
    guideId,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Avaliação enviada com sucesso!',
      });
      router.dismiss();
    },
    onError: (error: any) => {
      if (error?.response?.data?.message?.includes('already created a review')) {
        Toast.show({
          type: 'error',
          text1: 'Você já avaliou este guia!',
        });
        return;
      }

      Toast.show({
        type: 'error',
        text1: 'Erro ao enviar avaliação',
        text2: 'Tente novamente mais tarde',
      });
    },
  });

  const formatReviewText = (data: AddReviewFormData) => {
    let text = data.comment.trim();

    if (data.likedTags.length > 0) {
      text += '\n\nO que gostei: ' + data.likedTags.join(', ');
    }

    if (data.dislikedTags.length > 0) {
      text += '\n\nO que não gostei: ' + data.dislikedTags.join(', ');
    }

    return text;
  };

  const handleSubmit = async (data: AddReviewFormData) => {
    try {
      const formattedText = formatReviewText(data);
      
      await createReview({
        text: formattedText,
        date: new Date().toISOString(),
        rating,
      });
    } catch (error: any) {
      if (error?.response?.data?.message?.includes('already created a review')) {
        Toast.show({
          type: 'error',
          text1: 'Você já avaliou este guia!',
        });
        return;
      }

      Toast.show({
        type: 'error',
        text1: 'Erro ao enviar avaliação',
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
