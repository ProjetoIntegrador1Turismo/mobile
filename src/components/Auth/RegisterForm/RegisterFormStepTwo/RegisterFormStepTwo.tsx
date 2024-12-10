import { View } from 'react-native';
import { ControlledInput } from 'src/components/Auth/ControlledInput/ControlledInput';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';

import { RegisterFormStepTwoProps, RegisterStepTwoFormData } from './RegisterFormStepTwo.types';
import { useRegisterFormStepTwoViewModel } from './RegisterFormStepTwoViewModel';

export function RegisterFormStepTwo({ StepOneData }: RegisterFormStepTwoProps) {
  const { control, handleSubmit, onPressContinue, isPending } = useRegisterFormStepTwoViewModel({
    StepOneData,
  });

  return (
    <View className='flex items-center gap-3'>
      <View>
        <ControlledInput<RegisterStepTwoFormData>
          label='E-mail'
          placeholder='Digite seu e-mail'
          control={control}
          name='email'
        />
        <ControlledInput<RegisterStepTwoFormData>
          label='Senha'
          placeholder='Digite sua senha'
          control={control}
          name='password'
          password
        />
        <ControlledInput<RegisterStepTwoFormData>
          label='Confirmar senha'
          placeholder='Confirme sua senha'
          control={control}
          name='confirmPassword'
          password
        />
      </View>
      <View className='flex w-[95%] flex-row justify-between'>
        <TLGradientButton
          title='Finalizar Cadastro!'
          className='w-full'
          isLoading={isPending}
          onPress={handleSubmit(onPressContinue)}
        />
      </View>
    </View>
  );
}
