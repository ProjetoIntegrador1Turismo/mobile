import { Link } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { FormContainer } from 'src/components/Auth/FormContainer/FormContainer';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';
import { Container } from 'src/components/Container/Container';
import { CustomText } from 'src/components/Text/CustomText';

import { LoginForm } from '~/src/components/Auth/LoginForm/LoginForm';
import { SolidButton } from '~/src/components/Button/SolidButton/SolidButton';
import { TLGradientButton } from '~/src/components/Button/TLGradientButton/TLGradientButton';

export default function LoginView() {
  return (
    <FormContainer className='items-center bg-tl-bg'>
      <View className='mt-16 flex w-11/12'>
        <GoBackButton />
        <CustomText className='text-white' size={36} weight='bold'>
          Acesse
        </CustomText>
        <CustomText size={20} className='text-white'>
          Insira e-mail e senha para entrar!
        </CustomText>
      </View>
      <LoginForm />
      <CustomText className='text-white'>Esqueci minha senha</CustomText>
      <View className='flex w-[75%] flex-row justify-between'>
        <TLGradientButton title='Acessar' />
        <SolidButton title='Criar minha conta' />
      </View>
    </FormContainer>
  );
}
