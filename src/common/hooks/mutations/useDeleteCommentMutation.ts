import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteComment } from '~/src/common/repositories/comment/comment.repository';

interface UseDeleteCommentMutationParams {
  pointId: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export function useDeleteCommentMutation({
  pointId,
  onSuccess,
  onError,
}: UseDeleteCommentMutationParams) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => DeleteComment(commentId),
    onSuccess: () => {
      // Invalida a query do ponto de interesse para recarregar os comentários
      queryClient.invalidateQueries(['tourPage', pointId]);
      onSuccess?.();
    },
    onError: (error: any) => {
      onError?.(error);
    },
  });
}
