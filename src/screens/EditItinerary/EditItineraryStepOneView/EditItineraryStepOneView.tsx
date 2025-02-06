import React from 'react';
import { View, Text } from 'react-native';

import { FormContainer } from '~/src/components/Auth/FormContainer/FormContainer';
import TLLogoWhite from '~/src/components/Auth/TLLogoWhite/TLLogoWhite';
import { EditItineraryFormStepOne } from '~/src/components/Guide/EditItineraryForm/EditItineraryFormStepOne/EditItineraryFormStepOne';
import { CustomText } from '~/src/components/Text/CustomText';
import { GoBackButton } from '~/src/components/Button/GoBackButton/GoBackButton';

export default function EditItineraryStepOneView({ itineraryId }: { itineraryId: string }) {
  return (
    <FormContainer className='items-center gap-4 bg-tl-bg'>
      <View className='absolute left-4 top-12 z-10'>
        <GoBackButton />
      </View>
      <View className='items-center gap-5 pt-12'>
        <TLLogoWhite className='h-16 w-20' />
        <View>
          <CustomText className='text-center text-white' weight='bold' size={24}>
            Edição de Roteiros
          </CustomText>
          <CustomText className='text-center text-gray-300' weight='regular' size={16}>
            Edite seu roteiro aqui!
          </CustomText>
        </View>
      </View>
      <View>
        <EditItineraryFormStepOne itineraryId={itineraryId} />
      </View>
    </FormContainer>
  );
}
