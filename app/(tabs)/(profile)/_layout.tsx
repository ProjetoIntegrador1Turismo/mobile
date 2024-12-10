import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='point' />
      <Stack.Screen name='editprofile' />
    </Stack>
  );
}
