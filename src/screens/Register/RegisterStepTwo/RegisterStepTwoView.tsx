import React from 'react';
import { useWatch } from 'react-hook-form';
import { View, Text } from 'react-native';
import { FormContainer } from 'src/components/Auth/FormContainer/FormContainer';
import { CustomText } from 'src/components/Text/CustomText';

import { RegisterFormStepOne } from '~/src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOne';
import { GoBackButton } from '~/src/components/Button/GoBackButton/GoBackButton';

export function RegisterStepTwoView() {

  return (
    <FormContainer className='items-center bg-tl-bg'>
      <View className='mt-10 flex w-full flex-row items-center gap-36'>
        <GoBackButton />
        <View>
          <Text className='text-white'>dynamic form test</Text>
        </View>
      </View>
      <View>
        
        <RegisterFormStepOne />
      </View>
    </FormContainer>
  );
}
