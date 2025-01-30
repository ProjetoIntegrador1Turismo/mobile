export interface AddCommentFormProps {
  pointId: number;
}

export interface AddCommentFormData {
  comment: string;
  rating: number;
  likedTags: string[];
  dislikedTags: string[];
}

export const LIKED_TAGS = [
  'Acessibilidade',
  'Atendimento',
  'Limpeza',
  'Localização',
  'Preço',
  'Segurança',
  'Estrutura',
  'Ambiente',
];

export const DISLIKED_TAGS = [
  'Acessibilidade',
  'Atendimento',
  'Limpeza',
  'Localização',
  'Preço',
  'Segurança',
  'Estrutura',
  'Ambiente',
];
