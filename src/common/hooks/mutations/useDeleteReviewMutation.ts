import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteReview } from '~/src/common/repositories/review/review.repository';

interface UseDeleteReviewMutationParams {
  guideId: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export function useDeleteReviewMutation({
  guideId,
  onSuccess,
  onError,
}: UseDeleteReviewMutationParams) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => DeleteReview(reviewId),
    onSuccess: () => {
      // Invalida todas as queries relacionadas ao guia
      queryClient.invalidateQueries(['guideProfile']);
      queryClient.invalidateQueries(['guideProfile', guideId]);
      // Invalida o getMe para atualizar a lista de reviews do usuário
      queryClient.invalidateQueries(['getMe']);
      onSuccess?.();
    },
    onError: (error: any) => {
      onError?.(error);
    },
  });
}
