export interface AddCommentFormProps {
  interestPointId: number;
}

export interface AddCommentFormData {
  comment: string;
  rating: number;
  likedTags: string[];
  dislikedTags: string[];
}

export const LIKED_TAGS = [
  'Acessível',
  'Aconchegante',
  'Legal',
  'Arrojado',
  'Top',
  'Confortável',
  'História muito boa',
  'Organizado',
];

export const DISLIKED_TAGS = [
  'Chato',
  'Desorganizado',
  'Ruim',
  'Inacessível',
  'Fedido',
  'Não recomendo',
];
