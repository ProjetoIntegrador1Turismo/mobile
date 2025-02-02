import { Stack } from 'expo-router';

export default function ModalLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='full-guides-list' />
      <Stack.Screen name='full-comments-list' />
      <Stack.Screen name='full-guide-itineraries' />
      <Stack.Screen name='full-itinerary-reviews' />
      <Stack.Screen name='full-reviews-list' />
      <Stack.Screen name='interested-itinerary-tourists' />
      <Stack.Screen name='select-interest-point' />
      <Stack.Screen name='category-details' />
      <Stack.Screen name='select-interest-point-edit' />
      <Stack.Screen name='category-details-edit' />
    </Stack>
  );
}
