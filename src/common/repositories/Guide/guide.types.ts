export interface CreateItineraryDTO {
  title: string;
  description: string;
  averageCost: string;
  days: string;
  interestPointsId: number[];
}

export interface EditItineraryDTO extends CreateItineraryDTO {
  id: number;
}
