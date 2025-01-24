export interface InterestedItineraryCardProps {
  itineraryId: number;
  guideImgUrl: string;
  guideName: string;
  itineraryTitle: string;
  itineraryImgUrl: string;
  onDelete: () => void;
}
