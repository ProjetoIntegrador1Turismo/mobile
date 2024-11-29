import { View } from 'react-native';
import { ControlledInput } from 'src/components/Auth/ControlledInput/ControlledInput';
import { useLoginFormViewModel } from 'src/components/Auth/LoginForm/LoginFormViewModel';
import { SolidButton } from 'src/components/Button/SolidButton/SolidButton';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';

import { LoginFormData } from './LoginForm.types';

export function LoginForm() {
  const { handleSubmit, onPressLogin, control, isLoading, onPressRegister } =
    useLoginFormViewModel();

  return (
    <View className='flex items-center gap-1'>
      <ControlledInput<LoginFormData>
        label='E-mail'
        placeholder='Digite seu e-mail'
        control={control}
        name='username'
      />
      <ControlledInput<LoginFormData>
        label='Senha'
        placeholder='Digite sua senha'
        control={control}
        name='password'
        password
      />
      <View className='my-8 flex w-[90%] flex-row justify-center'>
        <CustomText className='text-white'>Esqueci minha senha</CustomText>
      </View>
      <View className='flex w-[90%] flex-row justify-between'>
        <TLGradientButton
          title='Acessar'
          className='min-w-[40%]'
          onPress={handleSubmit(onPressLogin)}
          isLoading={isLoading}
        />
        <SolidButton
          title='Criar conta'
          className='min-w-[40%]'
          color='white'
          onPress={onPressRegister}
        />
      </View>
    </View>
  );
}
