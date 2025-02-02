import React from 'react';
import { View, Text } from 'react-native';

import { GoBackButton } from '~/src/components/Button/GoBackButton/GoBackButton';
import { Container } from '~/src/components/Container/Container';
import { InterestPointCategoryList } from '~/src/components/Guide/NewItineraryForm/CategoryList/InterestPointCategoryList';

export default function InterestPointSelectionView() {
  return (
    <Container className='bg-tl-bg px-8'>
      <View className='pt-16'>
        <GoBackButton />
      </View>
      <InterestPointCategoryList />
    </Container>
  );
}
