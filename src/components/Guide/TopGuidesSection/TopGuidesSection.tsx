import { View, Text } from 'react-native';
import React from 'react';
import { TopGuideCardProps } from '../TopGuideCard/TopGuideCard.types';
import { CustomText } from 'src/components/Text/CustomText';
import { AntDesign } from '@expo/vector-icons';
import { TopGuideCard } from '../TopGuideCard/TopGuideCard';

export default function TopGuidesSection({ topGuides }: { topGuides: TopGuideCardProps[] }) {
  return (
    <View className='flex flex-col w-full'>
      <CustomText className='text-white' size={24} weight='bold'>
        Top Guias da semana:
      </CustomText>
      <View className='flex flex-row items-baseline'>
        <CustomText className='mr-2 text-white' size={14} weight='regular'>
          Recomendados
        </CustomText>
        <AntDesign name='star' size={14} color='#FF007F' />
      </View>

      <View className='mt-4'>
        {topGuides.map((guide) => (
          <View key={guide.id} className='mb-2'>
            <TopGuideCard
              id={guide.id}
              profileImage={guide.profileImage}
              name={guide.name}
              rating={guide.rating}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
