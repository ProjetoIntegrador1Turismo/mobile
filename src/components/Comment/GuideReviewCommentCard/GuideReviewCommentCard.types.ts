export interface GuideReviewCommentCardProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  avatarUrl: string;
  guide: {
    name: string;
    id: string;
    avatarUrl: string;
  };
}
