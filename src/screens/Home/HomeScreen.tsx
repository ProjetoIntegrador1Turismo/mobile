import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import React from 'react';
import { TopInterestPointSlider } from '~/src/components/InterestPoint/TopInterestPointCard/TopInterestPointSlider/TopInterestPointSlider';
import { LogoTl } from 'src/components/Logo/LogoTL';
import { Divider } from 'src/components/Divider/Divider';
import { CardSlider } from 'src/components/Slider/CardSlider';
import { InterestPointCard } from '~/src/components/InterestPoint/InterestPointCard/InterestPointCard';
import TopGuidesSection from '~/src/components/Guide/TopGuidesSection/TopGuidesSection';
import { SolidButton } from '~/src/components/Button/SolidButton/SolidButton';
import { useHomeScreenViewModel } from 'src/screens/Home/HomeScreenViewModel';

export function HomeScreen() {
  const {
    handleTopInterestPointPress,
    handleInterestPointPress,
    isLoading,
    isError,
    topPoints,
    firstSlider,
    secondSlider,
    guides,
  } = useHomeScreenViewModel();

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (isError || !topPoints || !firstSlider || !secondSlider || !guides) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>Error loading data</Text>
      </View>
    );
  }

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
          <TopInterestPointSlider
            items={topPoints}
            className='mb-2 w-full'
            onItemPress={handleTopInterestPointPress}
          />

          <Divider text='Restaurantes, Eventos e Passeios' />
          <CardSlider
            data={firstSlider}
            renderItem={({ item }) => (
              <InterestPointCard {...item} onPress={() => handleInterestPointPress(item.id)} />
            )}
            className='my-2 w-full'
            ItemSeparatorComponent={() => <View className='w-4' />}
            initialIndex={1}
          />

          <Divider text='Roteiros, Hotéis e Experiências' />
          <CardSlider
            data={secondSlider}
            renderItem={({ item }) => (
              <InterestPointCard {...item} onPress={() => handleInterestPointPress(item.id)} />
            )}
            className='my-2 w-full'
            ItemSeparatorComponent={() => <View className='w-4' />}
            initialIndex={1}
          />
        </View>
        <View className='mt-8 flex items-center px-2'>
          <TopGuidesSection topGuides={guides} />
          <SolidButton title='Ver mais' size='sm' className='mt-4' py={2} />
        </View>
      </View>
    </ScrollView>
  );
}
