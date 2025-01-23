import { GuideReview } from '~/src/screens/GuideProfile/GuideProfileScreen.types';

export interface FullReviewsListProps {
  reviews: GuideReview[];
  onClose: () => void;
}
