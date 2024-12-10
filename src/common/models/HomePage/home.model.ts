export interface HomePageModel {
  top3InterestPoints: Top3InterestPoint[];
  firstSlider: FirstSlider[];
  secondSlider: SecondSlider[];
  topGuides: TopGuide[];
}

export interface Top3InterestPoint {
  id: number;
  name: string;
  averageValue: number;
  duration: string;
  imageCoverUrl: string;
}

export interface FirstSlider {
  id: number;
  name: string;
  imageCoverUrl: string;
  interestPointType: string;
}

export interface SecondSlider {
  id: number;
  name: string;
  imageCoverUrl: string;
  interestPointType: string;
}

export interface TopGuide {
  id: number;
  firstName: string;
  lastName: string;
  averageRating: number;
  profileImageUrl: string;
}
