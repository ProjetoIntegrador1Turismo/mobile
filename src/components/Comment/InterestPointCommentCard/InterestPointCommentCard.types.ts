export interface InterestPointCommentCardProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  avatarUrl: string;
  interestPoint: {
    id: number;
    name: string;
  };
  commentId: number;
}
