import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export const useTabBarViewModel = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const [Dimensions, setDimensions] = useState<{ width: number; height: number }>({
    height: 20,
    width: 100,
  });

  const buttonWidth = Dimensions.width / state.routes.length;

  const onTabBarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const TabPositionX = useSharedValue(0);
  const animatedTabPositionStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: TabPositionX.value }],
    };
  });

  useEffect(() => {
    TabPositionX.value = withSpring(buttonWidth * state.index, {
      duration: 300,
      dampingRatio: 1,
      stiffness: 120,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
    });
  }, [state.index, buttonWidth]);

  const tabs = state.routes.map((route, index) => {
    const isFocused = state.index === index;
    const { options } = descriptors[route.key];

    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
          ? options.title
          : route.name;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return {
      label,
      onPress,
      onLongPress,
      isFocused,
      routeName: route.name,
    };
  });

  return { Dimensions, onTabBarLayout, animatedTabPositionStyle, buttonWidth, tabs };
};
