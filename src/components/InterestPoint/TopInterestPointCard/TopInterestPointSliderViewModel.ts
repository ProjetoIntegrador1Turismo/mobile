import { TopInterestPointCardProps } from './TopInterestPointCard.types';

export class TopInterestPointSliderViewModel {
  private medalOrder = { 1: 0, 2: -1, 3: 1 };

  organizeByMedalRanking(items: TopInterestPointCardProps[]): TopInterestPointCardProps[] {
    return [...items].sort((a, b) => {
      return this.medalOrder[a.medal] - this.medalOrder[b.medal];
    });
  }
}
