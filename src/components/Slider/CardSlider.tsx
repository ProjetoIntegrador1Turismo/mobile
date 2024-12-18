import React, { useEffect, useRef } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

interface CardSliderProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  horizontal?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  contentContainerStyle?: any;
  ItemSeparatorComponent?: React.ComponentType<any>;
  className?: string;
  initialIndex?: number;
}

export function CardSlider<T>({
  data,
  renderItem,
  horizontal = true,
  showsHorizontalScrollIndicator = false,
  contentContainerStyle,
  ItemSeparatorComponent,
  className,
  initialIndex = 0,
}: CardSliderProps<T>) {
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (initialIndex > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: initialIndex,
          animated: false,
        });
      }, 100);
    }
  }, [initialIndex]);

  return (
    <View className={className}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        contentContainerStyle={contentContainerStyle}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
}
