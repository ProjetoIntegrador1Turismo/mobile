import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Toast, { BaseToast, ErrorToast, BaseToastProps } from 'react-native-toast-message';
import { ReactQueryProvider } from 'src/common/providers/ReactQuery/ReactQueryProvider';
import { useAppRootViewModel } from 'src/components/AppRoot/AppRootViewModel';
import { SplashView } from 'src/screens/Splash/SplashView';
export default function AppRoot() {
  const { splashComplete } = useAppRootViewModel();

  const toastConfig = {
    success: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        style={{ backgroundColor: '#171717', borderLeftColor: '#28A745' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
          fontFamily: 'Poppins_400Regular',
          color: 'white',
        }}
        text2Style={{
          fontWeight: '400',
          fontFamily: 'Poppins_400Regular',
          color: 'white',
        }}
      />
    ),
    error: (props: BaseToastProps) => (
      <ErrorToast
        {...props}
        style={{ backgroundColor: '#171717', borderLeftColor: '#FF4C4C' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
          fontFamily: 'Poppins_400Regular',
          color: '#FFF',
        }}
        text2Style={{
          fontWeight: '400',
          fontFamily: 'Poppins_400Regular',
          color: '#FFF',
        }}
      />
    ),
  };

  return splashComplete ? (
    <ReactQueryProvider>
      <StatusBar style='light' />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>
      <Toast config={toastConfig} />
    </ReactQueryProvider>
  ) : (
    <ReactQueryProvider>
      <SplashView />
    </ReactQueryProvider>
  );
}
