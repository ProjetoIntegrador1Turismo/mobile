import { useCallback } from 'react';
import { Animated } from 'react-native';

export function useInterestPointCardViewModel() {
  const scaleAnim = new Animated.Value(1);

  const handlePressIn = useCallback(() => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressOut = useCallback(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  return {
    scaleAnim,
    handlePressIn,
    handlePressOut,
  };
}
