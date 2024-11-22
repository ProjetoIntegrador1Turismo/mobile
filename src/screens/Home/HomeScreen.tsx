import { View, Image, ScrollView } from 'react-native';
import React from 'react';
import { TopInterestPointSlider } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointSlider';
import { TopInterestPointCardProps } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard.types';
import { LogoTl } from 'src/components/Logo/LogoTL';
import { Divider } from 'src/components/Divider/Divider';
import { CardSlider } from 'src/components/Slider/CardSlider';
import { InterestPointCard } from '~/src/components/InterestPoint/InterestPointCard/InterestPointCard';
import TopGuidesSection from '~/src/components/Guide/TopGuidesSection/TopGuidesSection';

const sampleTopInterestPoints: TopInterestPointCardProps[] = [
  {
    id: 1,
    name: 'Cataratas do Iguaçu',
    imageCover:
      'https://plus.unsplash.com/premium_photo-1697729979889-31ec7ecf6f06?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '2h',
    priceLevel: 2,
    medal: 1,
  },
  {
    id: 2,
    name: 'Parque das Aves',
    imageCover:
      'https://images.unsplash.com/photo-1559668396-7dfc173152ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '3h',
    priceLevel: 3,
    medal: 2,
  },
  {
    id: 3,
    name: 'Marco das três fronteiras',
    imageCover:
      'https://www.iguassu.com.br/wp-content/uploads/elementor/thumbs/Marco-das-3-Fronteiras-Creditos-Adriano-Kirihara-ptczc7eohr1hjidb5nm8atg8vlce06wjx52p40wu0w.png',
    duration: '4h',
    priceLevel: 1,
    medal: 3,
  },
];

const sampleTopGuides = [
  {
    id: 1,
    name: 'Jackson Lentinho',
    profileImage:
      'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Jackson Lentinho',
    profileImage:
      'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Jackson Lentinho',
    profileImage:
      'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Jackson Lentinho',
    profileImage:
      'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Jackson Lentinho',
    profileImage:
      'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
  },
];

export function HomeScreen() {
  return (
    <ScrollView
      className='flex-1'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}>
      <View className='flex-1 items-center px-4 pt-12'>
        <LogoTl className='mb-2' />
        <View className='w-full'>
          <Divider text='Top Atrativos' />
          <TopInterestPointSlider items={sampleTopInterestPoints} className='w-full' />

          <Divider text='Restaurantes, eventos e passeios' />
          <CardSlider
            data={sampleTopInterestPoints}
            renderItem={({ item }) => (
              <InterestPointCard id={item.id} name={item.name} imageCover={item.imageCover} />
            )}
            className='my-2 w-full'
            ItemSeparatorComponent={() => <View className='w-4' />}
            initialIndex={1}
          />

          <Divider text='Roteiros, hotéis e experiências' />
          <CardSlider
            data={sampleTopInterestPoints}
            renderItem={({ item }) => (
              <InterestPointCard id={item.id} name={item.name} imageCover={item.imageCover} />
            )}
            className='my-2 w-full'
            ItemSeparatorComponent={() => <View className='w-4' />}
            initialIndex={1}
          />
        </View>
      </View>
      <View className='flex items-start px-4 mt-8'>
        <TopGuidesSection topGuides={sampleTopGuides} />
      </View>

      <View className='h-24' />
    </ScrollView>
  );
}
