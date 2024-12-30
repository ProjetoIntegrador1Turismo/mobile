export interface InterestPointCommentCardProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  avatarUrl: string;
  interestPoint: {
    name: string;
    id: string;
  };
}
