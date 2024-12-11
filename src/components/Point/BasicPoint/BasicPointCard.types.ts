export interface BasicPointCardProps {
  id: number;
  pointName: string;
  maxPointNameLength?: number;
  onPress?: () => void;
  averageRating: number;
  averageValue: number;
  imageCover: string;
  className?: string;
}
