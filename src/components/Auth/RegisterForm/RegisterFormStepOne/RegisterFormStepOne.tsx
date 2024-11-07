import { View } from 'react-native';
import { ControlledInput } from 'src/components/Auth/ControlledInput/ControlledInput';
import { RegisterStepOneFormData } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOne.types';
import { useRegisterStepOneViewModel } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOneViewModel';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';

export function RegisterFormStepOne() {
  const { control, handleSubmit, onPressContinue } = useRegisterStepOneViewModel();
  return (
    <View className='flex items-center gap-1'>
      <View className='mb-7 mt-10'>
        <ControlledInput<RegisterStepOneFormData>
          label='Nome'
          placeholder='Digite seu nome'
          control={control}
          name='name'
        />
        <ControlledInput<RegisterStepOneFormData>
          label='Telefone'
          placeholder='(99) 99999-9999'
          control={control}
          name='phone'
        />
      </View>

      <View className='mb-10 flex justify-center'>
        <CustomText className='text-white'>Só mais um pouco e já estará pronto!</CustomText>
      </View>
      <View className='flex w-[90%] flex-row justify-between'>
        <TLGradientButton
          title='Acessar'
          className='w-full'
          onPress={handleSubmit(onPressContinue)}
        />
      </View>
    </View>
  );
}
