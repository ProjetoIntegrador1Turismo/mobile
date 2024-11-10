export function useStarsViewModel(rating: number) {
    const roundedRating = Math.round(rating);
    const stars = Array.from({ length: 5 }, (_, index) => index < roundedRating);
  
    return { stars };
  }