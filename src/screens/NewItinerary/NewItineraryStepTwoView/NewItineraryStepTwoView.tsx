import React from 'react';
import { View } from 'react-native';
import { Container } from 'src/components/Container/Container';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import { GradientBorderButton } from 'src/components/Button/GradientBorderButton/GradientBorderButton';
import NewItineraryFormStepTwo from 'src/components/Guide/NewItineraryForm/NewItineraryFormStepTwo/NewItineraryFormStepTwo';
import { CustomText } from 'src/components/Text/CustomText';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';

import { useNewItineraryStepTwoViewModel } from './NewItineraryStepTwoViewModel';

export default function NewItineraryStepTwoView() {
  const { handleAddInsterestPointPress } = useNewItineraryStepTwoViewModel();

  return (
    <Container className='items-center gap-4 bg-tl-bg'>
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
            Insira os pontos de interesse!
          </CustomText>
        </View>
      </View>
        <GradientBorderButton
          title='Adicionar'
          className='w-[90%]'
          onPress={handleAddInsterestPointPress}
        />
        <View className='h-[400px]'>
          <NewItineraryFormStepTwo />
        </View>
    </Container>
  );
}
