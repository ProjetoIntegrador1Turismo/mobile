import React from 'react';
import { View, Text } from 'react-native';
import { AuthFormHeader } from 'src/components/Auth/AuthFormHeader/AuthFormHeader';
import { FormContainer } from 'src/components/Auth/FormContainer/FormContainer';
import { RegisterFormStepOne } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOne';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';

export function RegisterStepOneView() {
  return (
    <FormContainer className='items-center bg-tl-bg'>
      <View className='mt-14 flex w-11/12 gap-6'>
        <GoBackButton />
        <AuthFormHeader title='Criar Conta' label='Crie uma conta com suas informações!' />
      </View>
      <RegisterFormStepOne />
      <View className='mt-[60px] '>
        <TLLogoWhite className='h-[100px] w-[150px] object-cover' />
      </View>
    </FormContainer>
  );
}
