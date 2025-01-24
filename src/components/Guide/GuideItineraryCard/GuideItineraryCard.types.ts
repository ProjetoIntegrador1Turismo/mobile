// GuideItineraryCard.types.ts

export interface GuideItineraryCardProps {
  guide: {
    name: string;
    profileImage?: string;
  };
  title: string;
  backgroundImage: string;
  itineraryId: number;
  onPress?: () => void;
}
