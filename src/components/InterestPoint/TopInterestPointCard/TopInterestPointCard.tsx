import React from 'react';
import { View, Image } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { TopInterestPointCardProps } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard.types';
import { getMedalColor } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCardViewModel';

import { CustomText } from '../../Text/CustomText';

export function TopInterestPointCard(props: TopInterestPointCardProps) {
  const renderPriceLevel = (priceLevel: 1 | 2 | 3) => {
    return Array.from({ length: 3 }, (_, index) => (
      <Feather
        key={index}
        name='dollar-sign'
        size={12}
        color={index < priceLevel ? 'black' : 'gray'}
      />
    ));
  };

  return (
    <View className='flex w-[250px] rounded-xl bg-[#1C1C1E] shadow-lg'>
      <View className='relative h-[150px] w-full overflow-hidden rounded-t-xl'>
        <Image
          source={{ uri: props.imageCover }}
          style={{ width: '100%', height: '100%' }}
          className='object-cover'
        />
        <View className='absolute right-2 top-2'>
          <FontAwesome5 name='medal' size={16} color={getMedalColor[props.medal]} />
        </View>
      </View>

      <View className='flex flex-row items-start justify-between rounded-b-xl bg-white px-4 py-2'>
        <View style={{ maxWidth: '65%' }}>
          <CustomText weight='bold' size={18}>
            {props.name}
          </CustomText>
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
            <View className='ml-1 flex flex-row space-x-1'>
              {renderPriceLevel(props.priceLevel)}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
