import { api } from '../client';

interface CreateReviewDTO {
  text: string;
  date: string;
  rating: number;
}

export async function CreateReview(guideId: number, data: CreateReviewDTO) {
  try {
    const response = await api.post(`/review/${guideId}`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
}

export function DeleteReview(reviewId: number) {
  return api.delete(`/review/${reviewId}`);
}
