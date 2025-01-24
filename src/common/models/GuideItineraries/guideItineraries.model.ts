export type GuideItinerariesModel = Itinerary[]

export interface Itinerary {
  id: number
  title: string
  description: string
  mediumCost: number
  days: number
  imageCoverUrl: string
  interestPoints: InterestPoint[]
  interestedTourists: InterestedTourist[]
}

export interface InterestPoint {
  id: number
  name: string
  shortDescription: string
  imageCoverUrl: string
  interestPointType: string
}

export interface InterestedTourist {
  id: number
  email: string
  userName: string
  firstName: string
  lastName: string
  profileImageUrl: string
  phone: string
}
