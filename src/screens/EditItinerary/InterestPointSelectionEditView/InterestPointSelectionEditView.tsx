import React from 'react';
import { View } from 'react-native';

import { GoBackButton } from '~/src/components/Button/GoBackButton/GoBackButton';
import { Container } from '~/src/components/Container/Container';
import { InterestPointCategoryListEdit } from '~/src/components/Guide/EditItineraryForm/InterestPointCategoryListEdit/InterestPointCategoryListEdit';

export default function InterestPointSelectionEditView() {
  return (
    <Container className='bg-tl-bg px-8'>
      <View className='pt-16'>
        <GoBackButton />
      </View>
      <InterestPointCategoryListEdit />
    </Container>
  );
}
