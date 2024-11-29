import { Stack } from 'expo-router';
import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { ReactQueryProvider } from 'src/common/providers/ReactQuery/ReactQueryProvider';
import { useSplashStore } from 'src/common/stores/SplashStore';
import { SplashView } from 'src/screens/Splash/SplashView';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  // splash screen code
  const splashComplete = useSplashStore((state) => state.splashComplete);

  // return splashComplete ? (
  //   <Stack screenOptions={{ headerShown: false }}>
  //     {/* <Stack.Screen name='(auth)' options={{ headerShown: false }} /> */}
  //     <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
  //     <Stack.Screen name='(auth)' options={{ headerShown: false }} />
  //     {/* <Stack.Screen
  //       name='(modals)'
  //       options={{
  //         presentation: 'modal',
  //         headerShown: false,
  //         fullScreenGestureEnabled: true
  //       }}
  //     /> */}
  //   </Stack>
  // ) : (
  //   <SplashView />
  // );

  return splashComplete ? (
    <ReactQueryProvider>
      <StatusBar style='light' />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>
    </ReactQueryProvider>
  ) : (
    <ReactQueryProvider>
      <SplashView />
    </ReactQueryProvider>
  );

  // return (
  //   <Stack>
  //     <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
  //     <Stack.Screen name='(auth)/register' options={{ headerShown: false }} />
  //   </Stack>
  // );
}
