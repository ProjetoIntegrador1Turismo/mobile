import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' />
      <Stack.Screen name='register' />
      <Stack.Screen name='register2' />
      <Stack.Screen name='recovery' />
      <Stack.Screen name='recoverysucess' />
      <Stack.Screen name='editprofile' />
    </Stack>
  );
}
