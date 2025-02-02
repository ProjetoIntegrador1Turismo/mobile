import React from 'react';
import { View } from 'react-native';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import { GradientBorderButton } from 'src/components/Button/GradientBorderButton/GradientBorderButton';
import { Container } from 'src/components/Container/Container';
import EditItineraryFormStepTwo from 'src/components/Guide/EditItineraryForm/EditItineraryFormStepTwo/EditItineraryFormStepTwo';
import { CustomText } from 'src/components/Text/CustomText';

import { useEditItineraryStepTwoViewModel } from './EditItineraryStepTwoViewModel';

export default function NewItineraryStepTwoView() {
  const { handleAddInsterestPointPress } = useEditItineraryStepTwoViewModel();

  return (
    <Container className='items-center gap-4 bg-tl-bg'>
      <View className='items-center gap-5 pt-12'>
        <TLLogoWhite className='h-16 w-20' />
        <View>
          <CustomText className='text-center text-white' weight='bold' size={24}>
            Edição de Roteiros
          </CustomText>
          <CustomText className='text-center text-white' size={14}>
            Edite os pontos de interesse do seu roteiro!
          </CustomText>
        </View>
      </View>
      <GradientBorderButton
        title='Adicionar'
        className='w-[90%]'
        onPress={handleAddInsterestPointPress}
      />
      <View className='h-[400px]'>
        <EditItineraryFormStepTwo />
      </View>
    </Container>
  );
}
