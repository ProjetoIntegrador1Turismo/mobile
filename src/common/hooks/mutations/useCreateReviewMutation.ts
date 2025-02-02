import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateReview } from 'src/common/repositories/review/review.repository';

interface CreateReviewData {
  text: string;
  date: string;
  rating: number;
}

interface UseCreateReviewMutationParams {
  guideId: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export function useCreateReviewMutation({ guideId, onSuccess, onError }: UseCreateReviewMutationParams) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateReviewData) => CreateReview(guideId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['guideProfile', guideId]);
      onSuccess?.();
    },
    onError: (error: any) => {
      onError?.(error);
    },
  });
}
