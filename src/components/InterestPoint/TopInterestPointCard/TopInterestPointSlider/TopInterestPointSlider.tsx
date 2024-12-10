import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { TopInterestPointCard } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard';
import { TopInterestPointSliderProps } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointSlider/TopInterestPointSlider.types';
import { useTopInterestPointSliderViewModel } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointSlider/TopInterestPointSliderViewModel';

export function TopInterestPointSlider({ items, onItemPress }: TopInterestPointSliderProps) {
  const { organizeByMedalRanking, width } = useTopInterestPointSliderViewModel();

  return (
    <View>
      <Carousel
        width={width}
        height={width / 2}
        data={organizeByMedalRanking(items)}
        modeConfig={{
          parallaxScrollingScale: 0.91,
          parallaxScrollingOffset: 75,
        }}
        mode='parallax'
        renderItem={({ item }) => (
          <View className='self-center'>
            <TopInterestPointCard
              duration={item.duration}
              id={item.id}
              imageCover={item.imageCover}
              medal={item.medal}
              name={item.name}
              priceLevel={item.priceLevel}
              onPress={() => onItemPress(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}
