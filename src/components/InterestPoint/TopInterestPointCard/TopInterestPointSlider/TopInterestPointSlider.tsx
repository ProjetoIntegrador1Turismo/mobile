import React from 'react';
import { View } from 'react-native';
import { TopInterestPointCard } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard';
import { useTopInterestPointSliderViewModel } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointSlider/TopInterestPointSliderViewModel';
import { TopInterestPointSliderProps } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointSlider/TopInterestPointSlider.types';
import { CardSlider } from 'src/components/Slider/CardSlider';

export function TopInterestPointSlider({
  items,
  className,
  onItemPress,
}: TopInterestPointSliderProps) {
  const { organizeByMedalRanking } = useTopInterestPointSliderViewModel();
  const organizedItems = organizeByMedalRanking(items);

  return (
    <View className={className}>
      <CardSlider
        data={organizedItems}
        renderItem={({ item }) => (
          <TopInterestPointCard
            id={item.id}
            name={item.name}
            imageCover={item.imageCover}
            medal={item.medal}
            duration={item.duration}
            priceLevel={item.priceLevel}
            onPress={() => onItemPress?.(item.id)}
          />
        )}
        className=''
        ItemSeparatorComponent={() => <View className='w-4' />}
        initialIndex={1}
      />
    </View>
  );
}
