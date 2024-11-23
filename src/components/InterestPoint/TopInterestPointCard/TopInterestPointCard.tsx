import React from 'react';
import { View, Image, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TopInterestPointCardProps } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard.types';
import { getMedalColor } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCardViewModel';
import { CustomText } from 'src/components/Text/CustomText';
import { Price } from 'src/components/Price/Price';

export function TopInterestPointCard(props: TopInterestPointCardProps) {
  return (
    <View className='flex w-[250px] rounded-xl bg-[#1C1C1E] shadow-lg'>
      <View className='relative h-[150px] w-full overflow-hidden rounded-t-xl'>
        <Image
          source={{ uri: props.imageCover }}
          style={{ width: '100%', height: '100%' }}
          className='object-cover opacity-95'
        />
        <View className='absolute right-2 top-2'>
          <FontAwesome5
            name='medal'
            size={24}
            color={getMedalColor[props.medal]}
            className='shadow-lg'
          />
        </View>
      </View>

      <View className='flex h-[60px] flex-row items-start justify-between rounded-b-xl bg-white px-4 py-2'>
        <View className='max-w-[65%]'>
          <Text numberOfLines={2} ellipsizeMode="tail">
            <CustomText 
              className='text-black' 
              weight='regular' 
              size={16}
            >
              {props.name}
            </CustomText>
          </Text>
        </View>

        <View className='flex flex-col items-start'>
          <View className='mb-1 flex flex-row items-baseline'>
            <FontAwesome5 name='clock' size={12} color='black' />
            <View className='ml-1'>
              <CustomText>{props.duration}</CustomText>
            </View>
          </View>

          <View className='flex flex-row items-start'>
            <FontAwesome5 name='money-bill-wave' size={12} color='black' />
            <View className='ml-1'>
              <Price priceLevel={props.priceLevel} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
