export interface ItineraryScreenProps {
  itineraryId: number;
}

export type InterestPointType = 'HOTEL' | 'EXPERIENCE' | 'RESTAURANT' | 'TOURIST_POINT' | 'EVENT';

export interface InterestPoint {
  id: number;
  name: string;
  shortDescription: string;
  imageCoverUrl: string;
  interestPointType: InterestPointType;
}

export interface InterestedTourist {
  id: number;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  phone: string;
}

export interface ItineraryGuide {
  id: number;
  firstName: string;
  lastName: string;
  cadasturCode: string;
  averageRating: number;
  profileImageUrl: string;
}

export interface Itinerary {
  id: number;
  title: string;
  description: string;
  mediumCost: number;
  days: number;
  imageCoverUrl: string;
  interestPoints: InterestPoint[];
  interestedTourists: InterestedTourist[];
}

export interface ItineraryReview {
  id: number;
  touristName: string;
  avatarUrl: string;
  text: string;
  date: string;
  rating: number;
}

export interface ItineraryPageData {
  guide: ItineraryGuide;
  itinerary: Itinerary;
  reviews: ItineraryReview[];
}
