export interface AddReviewFormProps {
  guideId: number;
}

export interface AddReviewFormData {
  comment: string;
  rating: number;
  likedTags: string[];
  dislikedTags: string[];
}

export const LIKED_TAGS = [
  'Simpático',
  'Sabe o Caminho',
  'Legal',
  'Explica bem',
  'Top',
  'Boa Aparência',
  'Conhece a História',
  'Recomendo',
];

export const DISLIKED_TAGS = [
  'Chato',
  'Não conhece muito o local',
  'Indeciso',
  'Chateia demais',
  'Antipático',
  'Não recomendo',
];
