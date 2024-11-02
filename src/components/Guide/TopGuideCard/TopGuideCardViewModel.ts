import { useAppRouter } from 'src/common/lib/router';

export function useTopGuideCardViewModel(rating: number) {
  const { push } = useAppRouter();

  const roundedRating = Math.round(rating);

  const stars = Array.from({ length: 5 }, (_, index) => index < roundedRating);

  return { stars };
}
