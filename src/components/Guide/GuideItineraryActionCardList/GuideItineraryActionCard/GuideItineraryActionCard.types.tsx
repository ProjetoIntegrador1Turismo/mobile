export interface GuideItineraryActionCardProps {
  title: string;
  imageCoverUrl: string;
  className?: string;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
  itineraryId: number;
}
