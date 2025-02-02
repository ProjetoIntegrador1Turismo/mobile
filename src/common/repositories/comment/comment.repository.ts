import { api } from '../client';

interface CreateCommentDTO {
  text: string;
  wasVisitingDate: string;
  rating: number;
}

export async function CreateComment(pointId: number, data: CreateCommentDTO) {
  try {
    const response = await api.post(`/comment/create/${pointId}`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
}

export function DeleteComment(commentId: number) {
  return api.delete(`/comment/delete/${commentId}`);
}
