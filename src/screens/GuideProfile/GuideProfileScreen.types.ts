export interface GuideProfileScreenProps {
  guideId: number;
}

export interface GuideItinerary {
  id: number;
  title: string;
  imageCoverUrl: string;
}

export interface GuideReview {
  id: number;
  touristName: string;
  avatarUrl: string;
  text: string;
  date: string;
  rating: number;
}

export interface GuideProfileModel {
  id: number;
  firstName: string;
  lastName: string;
  cadasturCode: string;
  averageRating: number;
  profileImageUrl: string;
  reviews: GuideReview[];
  itineraries: GuideItinerary[];
}
