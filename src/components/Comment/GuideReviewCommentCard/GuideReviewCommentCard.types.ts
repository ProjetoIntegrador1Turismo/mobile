export interface GuideReviewCommentCardProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  avatarUrl: string;
  reviewId: number;
  guideId: number;
  guide: {
    name: string;
    id: number;
    avatarUrl: string;
  };
}
