import React from 'react';
import { View } from 'react-native';
import { FormContainer } from 'src/components/Auth/FormContainer/FormContainer';
import { LoginForm } from 'src/components/Auth/LoginForm/LoginForm';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';
import { SolidButton } from 'src/components/Button/SolidButton/SolidButton';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';

export default function LoginView() {
  return (
    <FormContainer className='items-center bg-tl-bg'>
      <View className='mt-14 flex w-11/12 gap-6'>
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
      <TLLogoWhite className='mt-[100px] h-[100px] w-[150px] object-cover' />
    </FormContainer>
  );
}
