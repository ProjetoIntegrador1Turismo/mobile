import { Content } from 'src/common/models/Category/categoryDetail.model';

export interface InterestPointCardProps {
  data: Content;
  className?: string;
  onPressCard: (id: number) => void;
}
