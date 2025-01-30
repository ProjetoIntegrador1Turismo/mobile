interface Comment {
  id: number;
  text: string;
  wasVisitingDate: string;
  rating: number;
  tourist: {
    id: number;
    touristName: string;
    profileImageUrl: string;
  };
}

export interface InterestPointCommentsSectionProps {
  comments: Comment[];
  pointId: number;
  onAddCommentPress?: () => void;
}
