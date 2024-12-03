import React from 'react';
import { View, Text } from 'react-native';
import { RecoveryFormData } from 'src/components/Auth/RecoveryForm/RecoveryForm.types';

import { useRecoveryFormViewModel } from './RecoveryFormViewModel';
import { TLGradientButton } from '../../Button/TLGradientButton/TLGradientButton';
import { CustomText } from '../../Text/CustomText';
import { ControlledInput } from '../ControlledInput/ControlledInput';

export function RecoveryForm() {
  const { control, handleSubmit, onPressRecoverPassword, isPending } = useRecoveryFormViewModel();

  return (
    <View className='flex items-center justify-around gap-10'>
      <View className='flex gap-2'>
        <ControlledInput<RecoveryFormData>
          control={control}
          label='E-mail'
          name='email'
          placeholder='Digite seu e-mail'
        />
        <TLGradientButton
          title='Recuperar acesso'
          onPress={handleSubmit(onPressRecoverPassword)}
          isLoading={isPending}
        />
      </View>

      <View className='w-3/4'>
        <CustomText className='text-center text-white'>
          Vamos recuperar sua conta de forma rápida e segura!
        </CustomText>
      </View>
    </View>
  );
}
