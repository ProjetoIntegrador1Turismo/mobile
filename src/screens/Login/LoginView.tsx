import React from 'react';
import { View } from 'react-native';
import { AuthFormHeader } from 'src/components/Auth/AuthFormHeader/AuthFormHeader';
import { FormContainer } from 'src/components/Auth/FormContainer/FormContainer';
import { LoginForm } from 'src/components/Auth/LoginForm/LoginForm';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';

export function LoginView() {
  return (
    <FormContainer className='items-center bg-tl-bg'>
      <View className='mt-14 flex w-11/12 gap-6'>
        <GoBackButton />
        <AuthFormHeader title='Acesse' label='Insira e-mail e senha para entrar!' />
      </View>
      <View className='mb-3 mt-14'>
        <LoginForm />
      </View>
      <View className='mt-[100px] '>
        <TLLogoWhite className='h-[100px] w-[150px] object-cover' />
      </View>
    </FormContainer>
  );
}
