/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';
import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { useSplashStore } from '~/src/common/stores/SplashStore';
import { SplashView } from '~/src/screens/Splash/SplashView';
import { ReactQueryProvider } from '~/src/common/providers/ReactQuery/ReactQueryProvider';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  // splash screen code
  const splashComplete = useSplashStore((state) => state.splashComplete);

  return (
    <ReactQueryProvider>
      {splashComplete ? (
        <>
          <StatusBar style='light' />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          </Stack>
        </>
      ) : (
        <SplashView />
      )}
    </ReactQueryProvider>
  );
}
