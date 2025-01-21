import React from 'react';
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import { PhoneMask } from 'src/common/utils/masks';
import { ControlledInput } from 'src/components/Auth/ControlledInput/ControlledInput';
import { LoginFormData } from 'src/components/Auth/LoginForm/LoginForm.types';
import { useLoginFormViewModel } from 'src/components/Auth/LoginForm/LoginFormViewModel';
import { SolidButton } from 'src/components/Button/SolidButton/SolidButton';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';

import { EditProfileFormData } from './EditProfileForm.types';
import { useEditProfileViewModel } from './EditProfileFormViewModel';
import { Avatar } from '../../Avatar/Avatar';
import { GoBackButton } from '../../Button/GoBackButton/GoBackButton';
import { AuthFormHeader } from '../AuthFormHeader/AuthFormHeader';
import { ControlledMaskedInput } from '../ControlledMaskedInput/ControlledMaskedInput';

export function EditProfileForm() {
  const { control, handleSubmit, onPressEdit, pickImage, userProfilePicture } =
    useEditProfileViewModel();

  return (
    <View className='flex items-center gap-1'>
      <View className='flex items-center gap-2'>
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: userProfilePicture }} className='h-40 w-40 rounded-full' />
        </TouchableOpacity>

        <CustomText className='text-center text-white'>
          Clique no avatar para adicionar uma foto!
        </CustomText>
      </View>
      <ControlledInput<EditProfileFormData>
        label='Nome'
        placeholder='Digite seu nome'
        control={control}
        name='name'
      />
      <ControlledInput<EditProfileFormData>
        label='E-mail'
        placeholder='Digite seu e-mail'
        control={control}
        disabled
        name='email'
      />
      <CustomText className='-mt-6 self-start text-orange-500'>
        Infelizmente, não é possivel alterar o email
      </CustomText>

      <ControlledMaskedInput<EditProfileFormData>
        label='Telefone'
        placeholder='Digite seu telefone'
        control={control}
        name='phone'
        mask={PhoneMask}
      />
      <ControlledInput<EditProfileFormData>
        label='Senha'
        placeholder='Digite sua nova senha'
        control={control}
        name='password'
        password
      />
      <TLGradientButton title='Atualizar' onPress={handleSubmit(onPressEdit)} className='w-full' />
    </View>
  );
}
