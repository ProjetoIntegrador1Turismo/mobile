export interface Review {
  id: number;
  touristName: string;
  avatarUrl: string;
  text: string;
  date: string;
  rating: number;
}

export interface GuideReviewsSectionProps {
  reviews: Review[];
  guideId: number;
}
