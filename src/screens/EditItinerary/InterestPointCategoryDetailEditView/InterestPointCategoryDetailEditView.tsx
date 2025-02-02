import React from 'react';
import { View, Text } from 'react-native';

import { Container } from '~/src/components/Container/Container';
import InterestPointCategoryDetailsEdit from '~/src/components/Guide/EditItineraryForm/InterestPointCategoryDetailsEdit/InterestPointCategoryDetailsEdit';

export default function InterestPointCategoryDetailsEditView({
  categoryTitle,
}: {
  categoryTitle: string;
}) {
  return (
    <Container className='bg-tl-bg px-8'>
      <View className='pt-8'>
        <InterestPointCategoryDetailsEdit categoryTitle={categoryTitle} />
      </View>
    </Container>
  );
}
