import { View, Image, ScrollView } from 'react-native';
import React from 'react';
import { TopInterestPointSlider } from '~/src/components/InterestPoint/TopInterestPointCard/TopInterestPointSlider/TopInterestPointSlider';
import { TopInterestPointCardProps } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointCard.types';
import { LogoTl } from 'src/components/Logo/LogoTL';
import { Divider } from 'src/components/Divider/Divider';
import { CardSlider } from 'src/components/Slider/CardSlider';
import { InterestPointCard } from '~/src/components/InterestPoint/InterestPointCard/InterestPointCard';
import TopGuidesSection from '~/src/components/Guide/TopGuidesSection/TopGuidesSection';
import { SolidButton } from '~/src/components/Button/SolidButton/SolidButton';
import { useHomeScreenViewModel } from 'src/screens/Home/HomeScreenViewModel';

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
    rating: 5,
  },
  {
    id: 2,
    name: 'Allan Chungus',
    profileImage:
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Bernardo Agro',
    profileImage:
      'https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
  },
  {
    id: 4,
    name: 'Doc.',
    profileImage:
      'https://images.pexels.com/photos/2678059/pexels-photo-2678059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 3,
  },
  {
    id: 5,
    name: 'Big chungus',
    profileImage:
      'https://sm.ign.com/ign_pt/news/b/big-chungu/big-chungus-might-be-coming-to-multiversus_atg6.jpg',
    rating: 2,
  },
];

const sampleRestaurantsEventsTours = [
  {
    id: 1,
    name: 'Gramadão da Vila A',
    imageCover: 'https://i.ytimg.com/vi/gkETYrzN3fA/maxresdefault.jpg',
    duration: '2h',
    priceLevel: 1,
  },
  {
    id: 2,
    name: 'Sky Bar',
    imageCover:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/15/70/a8/vista-para-o-rio-parana.jpg?w=1200&h=-1&s=1',
    duration: '1h',
    priceLevel: 2,
  },
  {
    id: 3,
    name: 'Semana do livro',
    imageCover:
      'https://jornaldigitalcanela.com.br/wp-content/uploads/2023/10/Colcha-feira-do-livro-2.webp',
    duration: '1h',
    priceLevel: 0,
  },
];

const sampleItinerariesHotelExperiences = [
  {
    id: 1,
    name: 'Eco Turismo sustentável',
    imageCover: 'https://i.imgur.com/rSW3vW5.png',
    duration: '2h',
    priceLevel: 1,
  },
  {
    id: 2,
    name: 'Romance na terra das cataratas',
    imageCover: 'https://i.imgur.com/rubYDru.png',
    duration: '2h',
    priceLevel: 1,
  },
  {
    id: 3,
    name: 'Adrenalina e passeios radicais',
    imageCover: 'https://i.imgur.com/OhNwC9o.png',
    duration: '2h',
    priceLevel: 1,
  },
  {
    id: 4,
    name: 'Explorando culturas',
    imageCover: 'https://i.imgur.com/SX0CAf7.png',
    duration: '2h',
    priceLevel: 1,
  },
  {
    id: 5,
    name: 'Aventura com família nas cataratas',
    imageCover: 'https://i.imgur.com/M1qMu2I.png',
    duration: '2h',
    priceLevel: 1,
  },
];

export function HomeScreen() {
  const { handleInterestPointPress } = useHomeScreenViewModel();

  return (
    <ScrollView
      className='flex-1'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
      automaticallyAdjustContentInsets={false}>
      <View className='flex-1 items-center px-4 pt-12'>
        <LogoTl className='mb-2' />
        <View className='w-full'>
          <Divider text='Top Atrativos' />
          <TopInterestPointSlider items={sampleTopInterestPoints} className='mb-2 w-full' />

          <Divider text='Restaurantes, Eventos e Passeios' />
          <CardSlider
            data={sampleRestaurantsEventsTours}
            renderItem={({ item }) => (
              <InterestPointCard
                id={item.id}
                name={item.name}
                imageCover={item.imageCover}
                onPress={() => handleInterestPointPress(item.id)}
              />
            )}
            className='my-2 w-full'
            ItemSeparatorComponent={() => <View className='w-4' />}
            initialIndex={1}
          />

          <Divider text='Roteiros, Hotéis e Experiências' />
          <CardSlider
            data={sampleItinerariesHotelExperiences}
            renderItem={({ item }) => (
              <InterestPointCard
                id={item.id}
                name={item.name}
                imageCover={item.imageCover}
                onPress={() => handleInterestPointPress(item.id)}
              />
            )}
            className='my-2 w-full'
            ItemSeparatorComponent={() => <View className='w-4' />}
            initialIndex={1}
          />
        </View>
      </View>
      <View className='mt-8 flex items-center px-4'>
        <TopGuidesSection topGuides={sampleTopGuides} />
        <SolidButton title='Ver mais' size='sm' className='mt-4' py={2} />
      </View>
    </ScrollView>
  );
}
