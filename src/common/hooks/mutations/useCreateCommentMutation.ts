import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateComment } from 'src/common/repositories/comment/comment.repository';

interface CreateCommentData {
  text: string;
  wasVisitingDate: string;
  rating: number;
}

interface UseCreateCommentMutationParams {
  pointId: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export function useCreateCommentMutation({
  pointId,
  onSuccess,
  onError,
}: UseCreateCommentMutationParams) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCommentData) => CreateComment(pointId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['tourPage', pointId]);
      onSuccess?.();
    },
    onError: (error: any) => {
      onError?.(error);
    },
  });
}
