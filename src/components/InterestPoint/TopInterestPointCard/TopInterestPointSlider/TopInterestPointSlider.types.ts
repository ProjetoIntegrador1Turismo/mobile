import { TopInterestPointCardProps } from "src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard.types";

export interface TopInterestPointSliderProps {
  items: TopInterestPointCardProps[];
  className?: string;
  onItemPress?: (id: number) => void;
}