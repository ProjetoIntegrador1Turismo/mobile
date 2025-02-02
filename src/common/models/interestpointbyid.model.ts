export interface InterestPointByIdModel {
  id: number;
  name: string;
  address: Address;
  averageValue: number;
  shortDescription: string;
  imageCoverUrl: string;
  averageRating: number;
  images: string[];
  interestPointType: string;
  starsNumber: number;
  isResort: boolean;
  breakfastIncluded: boolean;
}

interface Address {
  id: number;
  road: string;
  number: string;
  zipCode: string;
}
