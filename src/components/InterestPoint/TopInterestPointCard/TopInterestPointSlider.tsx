import React from 'react';
import { View } from 'react-native';
import { CardSlider } from 'src/components/Slider/CardSlider';
import { TopInterestPointCard } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard';
import { TopInterestPointCardProps } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard.types';
import { TopInterestPointSliderViewModel } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointSliderViewModel';

interface TopInterestPointSliderProps {
  items: TopInterestPointCardProps[];
  className?: string;
}

export function TopInterestPointSlider({ items, className }: TopInterestPointSliderProps) {
  const viewModel = new TopInterestPointSliderViewModel();
  const organizedItems = viewModel.organizeByMedalRanking(items);

  return (
    <View className={className}>
      <CardSlider
        data={organizedItems}
        renderItem={({ item }) => (
          <TopInterestPointCard
            id={item.id}
            name={item.name}
            imageCover={item.imageCover}
            duration={item.duration}
            priceLevel={item.priceLevel}
            medal={item.medal}
          />
        )}
        className='px-4'
        ItemSeparatorComponent={() => <View className='w-4' />}
        initialIndex={1}
      />
    </View>
  );
}
