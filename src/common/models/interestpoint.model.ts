export interface InterestPoint {
  id: number;
  name: string;
  address: Address;
  averageValue: number;
  shortDescription: string;
  longDescription: string;
  starsNumber: number;
  isResort: boolean;
  breakfastIncluded: boolean;
  foodType: string;
  date: string;
  duration: string;
  requiredAge: string;
  imageCoverUrl: string;
  images: string[];
  averageRating: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
