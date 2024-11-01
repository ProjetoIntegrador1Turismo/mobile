import { Link } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { FormContainer } from 'src/components/Auth/FormContainer/FormContainer';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';
import { Container } from 'src/components/Container/Container';
import { CustomText } from 'src/components/Text/CustomText';

import { LoginForm } from '~/src/components/Auth/LoginForm/LoginForm';
import TLLogoWhite from '~/src/components/Auth/TLLogoWhite/TLLogoWhite';
import { SolidButton } from '~/src/components/Button/SolidButton/SolidButton';
import { TLGradientButton } from '~/src/components/Button/TLGradientButton/TLGradientButton';

export default function LoginView() {
  return (
    <FormContainer className='items-center bg-tl-bg'>
      <View className='mt-8 flex w-11/12 gap-6'>
        <GoBackButton />
        <View>
          <CustomText className='text-white' size={36} weight='bold'>
            Acesse
          </CustomText>
          <CustomText size={20} className='text-white'>
            Insira e-mail e senha para entrar!
          </CustomText>
        </View>
      </View>
      <View className='mb-3 mt-14'>
        <LoginForm />
      </View>
      <View className='mb-10 flex w-[90%] flex-row justify-between'>
        <CustomText className='text-white'>Lembrar minha senha</CustomText>
        <CustomText className='text-white'>Esqueci minha senha</CustomText>
      </View>
      <View className='flex w-[90%] flex-row justify-between'>
        <TLGradientButton title='Acessar' className='min-w-[40%]' />
        <SolidButton title='Criar conta' className='min-w-[40%]' />
      </View>
      <TLLogoWhite className='mt-[140px] h-[100px] w-[150px] object-cover' />
    </FormContainer>
  );
}
