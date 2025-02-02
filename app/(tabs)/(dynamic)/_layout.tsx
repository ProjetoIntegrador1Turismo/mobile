import { Stack } from 'expo-router';

export default function DynamicLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='point' />
      <Stack.Screen name='create-itinerary-part-one' />
      <Stack.Screen name='create-itinerary-part-two' />
      <Stack.Screen name='edit-itinerary-part-one' />
      <Stack.Screen name='edit-itinerary-part-two' />
    </Stack>
  );
}
