export interface InterestedItineraryModel {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  interestedItineraries?: InterestedItinerary[];
  comments: Comment[];
  reviews: any[];
}

export interface InterestedItinerary {
  id: number;
  title: string;
  imageCoverUrl: string;
  guide: Guide;
}

interface Guide {
  id: number;
  firstName: string;
  lastName: string;
  cadasturCode: string;
  averageRating: number;
  profileImageUrl: string;
}

interface Comment {
  id: number;
  text: string;
  wasVisitingDate: string;
  rating: number;
  interestPoint: InterestPoint;
  tourist: Tourist;
}

interface InterestPoint {
  id: number;
  name: string;
  imageCoverUrl: string;
  interestPointType: string;
}

interface Tourist {
  id: number;
  touristName: string;
  profileImageUrl: string;
}
