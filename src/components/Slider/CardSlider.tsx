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
  keyExtractor?: (item: T, index: number) => string;
  enableInitialScroll?: boolean;
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
  keyExtractor,
  enableInitialScroll = false,
}: CardSliderProps<T>) {
  const flatListRef = useRef<FlatList>(null);

  const getItemLayout = (_: any, index: number) => ({
    length: 280, // Adjust this value based on your card width + margin
    offset: 280 * index,
    index,
  });

  const handleScrollToIndexFailed = (info: {
    index: number;
    highestMeasuredFrameIndex: number;
    averageItemLength: number;
  }) => {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: info.index,
        animated: false,
      });
    }, 100);
  };

  useEffect(() => {
    if (enableInitialScroll && initialIndex > 0 && data.length > initialIndex) {
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: initialIndex,
          animated: false,
        });
      }, 100);
    }
  }, [initialIndex, data, enableInitialScroll]);

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
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        onScrollToIndexFailed={handleScrollToIndexFailed}
      />
    </View>
  );
}
