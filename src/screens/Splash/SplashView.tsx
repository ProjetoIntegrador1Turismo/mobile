import { Video, ResizeMode } from 'expo-av';
import { StyleSheet } from 'react-native';

import { useSplashViewModel } from './SplashViewModel';

export function SplashView() {
  const { onPlaybackStatusUpdate } = useSplashViewModel();

  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require('assets/splash.mp4')}
      isLooping={false}
      shouldPlay
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
    />
  );
}
