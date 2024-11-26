import React from 'react';
import { View, Image, Pressable, Text, Animated } from 'react-native';
import { InterestPointCardProps } from 'src/components/InterestPoint/InterestPointCard/InterestPointCard.types';
import { CustomText } from 'src/components/Text/CustomText';
import { useInterestPointCardViewModel } from './InterestPointCardViewModel';

export function InterestPointCard({ id, name, imageCover, onPress }: InterestPointCardProps) {
  const { scaleAnim, handlePressIn, handlePressOut } = useInterestPointCardViewModel();

  return (
    <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View 
        className='h-[206px] w-[162px] overflow-hidden rounded-xl bg-black shadow-lg'
        style={{ transform: [{ scale: scaleAnim }] }}
      >
        <Image
          source={{ uri: imageCover }}
          style={{ width: '100%', height: '100%' }}
          className='object-cover opacity-75'
        />
        <View className='absolute bottom-4 w-full px-2'>
          <Text numberOfLines={2} ellipsizeMode="tail">
            <CustomText className='text-center text-2xl text-white' weight='regular'>
              {name}
            </CustomText>
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}
