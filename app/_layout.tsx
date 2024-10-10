import { Stack } from 'expo-router';

import '../global.css';
import { useSplashStore } from '~/src/common/stores/SplashStore';
import { SplashView } from '~/src/screens/Splash/SplashView';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const splashComplete = useSplashStore((state) => state.splashComplete);

  return splashComplete ? (
    <Stack screenOptions={{ contentStyle: { backgroundColor: '#151515' }}}>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  ) : (
    <SplashView />
  );
}
