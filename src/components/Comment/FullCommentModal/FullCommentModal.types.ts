export interface FullCommentModalProps {
  visible: boolean;
  onClose: () => void;
  name: string;
  date: string;
  text: string;
  rating: number;
  avatarUrl: string;
  isReview: boolean;
}
