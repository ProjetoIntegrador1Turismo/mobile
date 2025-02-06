import React from 'react';
import { View, Text } from 'react-native';

import { FormContainer } from '~/src/components/Auth/FormContainer/FormContainer';
import TLLogoWhite from '~/src/components/Auth/TLLogoWhite/TLLogoWhite';
import { NewItineraryFormStepOne } from '~/src/components/Guide/NewItineraryForm/NewItineraryFormStepOne/NewItineraryFormStepOne';
import { CustomText } from '~/src/components/Text/CustomText';
import { GoBackButton } from '~/src/components/Button/GoBackButton/GoBackButton';

export default function NewItineraryStepOneView() {
  return (
    <FormContainer className='items-center gap-4 bg-tl-bg'>
      <View className='absolute left-4 top-12 z-10'>
        <GoBackButton />
      </View>
      <View className='items-center gap-5 pt-12'>
        <TLLogoWhite className='h-16 w-20' />
        <View className='items-center'>
          <CustomText className='text-center text-white' weight='bold' size={24}>
            Criação de Roteiros
          </CustomText>
          <CustomText className='text-center text-white' size={14}>
            Crie seus roteiros aqui!
          </CustomText>
        </View>
      </View>
      <View>
        <NewItineraryFormStepOne />
      </View>
    </FormContainer>
  );
}
