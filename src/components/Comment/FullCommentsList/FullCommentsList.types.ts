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

export interface FullCommentsListProps {
  comments: Comment[];
  onClose: () => void;
}
