import React from 'react';
import { View, Text } from 'react-native';

import { GoBackButton } from '~/src/components/Button/GoBackButton/GoBackButton';
import { Container } from '~/src/components/Container/Container';
import InterestPointCategoryDetails from '~/src/components/Guide/NewItineraryForm/InterestPointCategoryDetails/InterestPointCategoryDetails';

export default function InterestPointCategoryDetailsView({
  categoryTitle,
}: {
  categoryTitle: string;
}) {
  return (
    <Container className='bg-tl-bg px-8'>
      <View className='pt-8'>
        <InterestPointCategoryDetails categoryTitle={categoryTitle} />
      </View>
    </Container>
  );
}
