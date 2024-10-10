import { AVPlaybackStatus } from 'expo-av';
import { hideAsync } from 'expo-splash-screen';

import { useSplashStore } from '~/src/common/stores/SplashStore';

export const useSplashViewModel = () => {
  const setSplashComplete = useSplashStore((state) => state.setSplashComplete);

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      hideAsync();
      if (status.didJustFinish) {
        setSplashComplete();
      }
    }
  }

  return { onPlaybackStatusUpdate };
};
