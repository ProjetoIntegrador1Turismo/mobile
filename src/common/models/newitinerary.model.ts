export interface NewItineraryModel {
  id: number;
  title: string;
  description: string;
  mediumCost: number;
  days: number;
  imageCoverUrl: string;
  interestPoints: InterestPoint[];
  interestedTourists: any[];
}

interface InterestPoint {
  id: number;
  name: string;
  shortDescription: string;
  imageCoverUrl: string;
  interestPointType: string;
}
