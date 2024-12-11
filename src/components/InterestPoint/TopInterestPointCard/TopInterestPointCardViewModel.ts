import { useCallback } from 'react';
import { Animated } from 'react-native';

export const getMedalColor = {
  1: '#FFD700',
  2: '#C0C0C0',
  3: '#CD7F32',
} as const;

export function useTopInterestPointCardViewModel() {
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
