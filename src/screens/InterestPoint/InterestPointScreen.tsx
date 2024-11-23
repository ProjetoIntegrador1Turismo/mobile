import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { useInterestPointScreenViewModel } from './InterestPointScreenViewModel';

interface InterestPointScreenProps {
  pointId: number;
}

export function InterestPointScreen({ pointId }: InterestPointScreenProps) {
  const { point, loading } = useInterestPointScreenViewModel(pointId);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!point) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Point not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold">{point.name}</Text>
      {point.description && (
        <Text className="mt-2 text-gray-600">{point.description}</Text>
      )}
      <Text className="mt-2">Duration: {point.duration}</Text>
      <Text>Price Level: {'$'.repeat(point.priceLevel)}</Text>
    </View>
  );
}
