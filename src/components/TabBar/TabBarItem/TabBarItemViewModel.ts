import { useEffect } from 'react';
import { useSharedValue, withSpring, useAnimatedStyle, interpolate } from 'react-native-reanimated';

export const useTabBarItemViewModel = (isFocused: boolean) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, {
      duration: 350,
    });
  }, [scale, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return { opacity };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.3]);
    const top = interpolate(scale.value, [0, 1], [0, 12]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  return { animatedTextStyle, animatedIconStyle };
};
