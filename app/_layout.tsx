/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';

import '../global.css';
// import { useSplashStore } from '~/src/common/stores/SplashStore';
// import { SplashView } from '~/src/screens/Splash/SplashView';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  // splash screen code
  // const splashComplete = useSplashStore((state) => state.splashComplete);

  // return splashComplete ? (
  //   <Stack>
  //     <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
  //     <Stack.Screen name='(auth)/register' options={{ headerShown: false }} />
  //   </Stack>
  // ) : (
  //   <SplashView />
  // );

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)/register' options={{ headerShown: false }} />
    </Stack>
  );
}
