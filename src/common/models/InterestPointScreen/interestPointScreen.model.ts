export interface InterestPointPageModel {
  interestPoint: InterestPoint;
  guidesWhoOfferThisTour: GuidesWhoOfferThisTour[];
  comments: Comment[];
}

export type InterestPointType = 'HOTEL' | 'RESTAURANT' | 'TOURIST_POINT' | 'EXPERIENCE' | 'EVENT';

export interface InterestPoint {
  id: number;
  name: string;
  address: Address;
  averageValue: number;
  shortDescription: string;
  longDescription?: string;
  starsNumber?: number;
  isResort?: boolean;
  breakfastIncluded?: boolean;
  foodType?: string;
  date?: string;
  duration?: string;
  requiredAge?: string;
  imageCoverUrl: string;
  images: string[];
  averageRating: string;
  interestPointType: InterestPointType;
}

export interface Address {
  road: string;
  number: string;
  zipCode: string;
}

export interface GuidesWhoOfferThisTour {
  id: number;
  firstName: string;
  lastName: string;
  averageRating: number;
  profileImageUrl: string;
}

export interface Comment {
  id: number;
  text: string;
  wasVisitingDate: string;
  rating: number;
  tourist: Tourist;
}

export interface Tourist {
  id: number;
  touristName: string;
  profileImageUrl: string;
}
