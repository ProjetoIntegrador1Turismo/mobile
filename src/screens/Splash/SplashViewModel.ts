import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { AVPlaybackStatus } from 'expo-av';
import { hideAsync } from 'expo-splash-screen';
import { useSplashStore } from 'src/common/stores/SplashStore';

export const useSplashViewModel = () => {
  const setSplashComplete = useSplashStore((state) => state.setSplashComplete);
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      hideAsync();
      if (status.didJustFinish && fontsLoaded) {
        setSplashComplete();
      }
    }
  }

  return { onPlaybackStatusUpdate };
};
