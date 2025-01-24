export interface GetMeModel {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  interestedItineraries: InterestedItinerary[];
  comments: Comment[];
  reviews: Review[];
}

export interface InterestedItinerary {
  id: number;
  title: string;
  imageCoverUrl: string;
  guide: Guide;
}

export interface Guide {
  id: number;
  firstName: string;
  lastName: string;
  cadasturCode: string;
  averageRating: number;
  profileImageUrl: string;
}

export interface Comment {
  id: number;
  text: string;
  wasVisitingDate: string;
  rating: number;
  interestPoint: InterestPoint;
  tourist: Tourist;
}

export interface InterestPoint {
  id: number;
  name: string;
  imageCoverUrl: string;
  interestPointType: string;
}

export interface Tourist {
  id: number;
  touristName: string;
  profileImageUrl: string;
}

export interface Review {
  touristName: string;
  id: number;
  text: string;
  date: string;
  rating: number;
  guide: Guide;
}
