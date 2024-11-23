import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import { InterestPointCardProps } from 'src/components/InterestPoint/InterestPointCard/InterestPointCard.types';
import { CustomText } from 'src/components/Text/CustomText';

export function InterestPointCard({ id, name, imageCover, onPress }: InterestPointCardProps) {
  return (
    <Pressable onPress={onPress}>
      <View className='h-[206px] w-[162px] overflow-hidden rounded-xl bg-black shadow-lg'>
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
      </View>
    </Pressable>
  );
}
