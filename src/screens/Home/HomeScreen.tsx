import React from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { SolidButton } from 'src/components/Button/SolidButton/SolidButton';
import { Container } from 'src/components/Container/Container';
import { Divider } from 'src/components/Divider/Divider';
import TopGuidesSection from 'src/components/Guide/TopGuidesSection/TopGuidesSection';
import { InterestPointCard } from 'src/components/InterestPoint/InterestPointCard/InterestPointCard';
import { TopInterestPointSlider } from 'src/components/InterestPoint/TopInterestPointCard/TopInterestPointSlider/TopInterestPointSlider';
import { LogoTl } from 'src/components/Logo/LogoTL';
import { CardSlider } from 'src/components/Slider/CardSlider';
import { useHomeScreenViewModel } from 'src/screens/Home/HomeScreenViewModel';

export function HomeScreen() {
  const {
    isLoading,
    handleTopInterestPointPress,
    handleInterestPointPress,
    isError,
    topPoints,
    firstSlider,
    secondSlider,
    guides,
  } = useHomeScreenViewModel();

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center bg-tl-bg'>
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
    <Container className='bg-tl-bg'>
      <ScrollView
        className='flex-1'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
        automaticallyAdjustContentInsets={false}>
        <View className='flex-1 items-center px-4 pt-12'>
          <LogoTl className='mb-2' />
          <View className='w-full'>
            <Divider text='Top Atrativos' />
            <View className='-mx-4'>
              <TopInterestPointSlider
                items={topPoints}
                className='mb-2 w-full'
                onItemPress={handleTopInterestPointPress}
              />
            </View>

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
        </View>
        <View className='mt-8 flex items-center px-4'>
          <TopGuidesSection topGuides={guides} />
        </View>
      </ScrollView>
    </Container>
  );
}
