import React from 'react';
import { View } from 'react-native';
import { AuthFormHeader } from 'src/components/Auth/AuthFormHeader/AuthFormHeader';
import { FormContainer } from 'src/components/Auth/FormContainer/FormContainer';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';
import { RegisterStepTwoViewProps } from 'src/screens/Register/RegisterStepTwo/RegisterStepTwo.types';

import { RegisterFormStepTwo } from '~/src/components/Auth/RegisterForm/RegisterFormStepTwo/RegisterFormStepTwo';

export function RegisterStepTwoView({ StepOneData }: RegisterStepTwoViewProps) {
  return (
    <FormContainer className='items-center bg-tl-bg'>
      <View className='mt-14 flex w-11/12 gap-6'>
        <GoBackButton />
        <AuthFormHeader title='Criar Conta' label='Crie uma conta com suas informações!' />
      </View>
      <View className='mt-10'>
        <RegisterFormStepTwo StepOneData={StepOneData} />
      </View>
      <View className='mt-[45px] '>
        <TLLogoWhite className='h-[100px] w-[150px] object-cover' />
      </View>
    </FormContainer>
  );
}
