import { View } from 'react-native';
import { CadasturMask, PhoneMask } from 'src/common/utils/masks';
import { ControlledCheckbox } from 'src/components/Auth/ControlledCheckbox/ControlledCheckbox';
import { ControlledInput } from 'src/components/Auth/ControlledInput/ControlledInput';
import { ControlledMaskedInput } from 'src/components/Auth/ControlledMaskedInput/ControlledMaskedInput';
import { RegisterFormStepOneFormData } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOne.types';
import { useRegisterFormStepOneViewModel } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOneViewModel';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';

export function RegisterFormStepOne() {
  const { control, handleSubmit, onPressContinue, isGuide } = useRegisterFormStepOneViewModel();

  return (
    <View className='flex items-center gap-3'>
      <View>
        <ControlledInput<RegisterFormStepOneFormData>
          label='Nome'
          placeholder='Digite seu nome'
          control={control}
          name='name'
        />
        <ControlledMaskedInput<RegisterFormStepOneFormData>
          label='Telefone'
          placeholder='(99) 99999-9999'
          control={control}
          mask={PhoneMask}
          name='phone'
        />
        <View className='my-3 ml-2'>
          <ControlledCheckbox<RegisterFormStepOneFormData>
            control={control}
            label='É um guia?'
            name='isGuide'
          />
        </View>

        {isGuide ? (
          <ControlledMaskedInput<RegisterFormStepOneFormData>
            control={control}
            mask={CadasturMask}
            name='cadastur'
            label='Cadastur'
            placeholder='insira seu cadastur'
          />
        ) : (
          <View className='flex h-[113px] items-center justify-center'>
            <CustomText className='text-white'>Só mais um pouco e já estara pronto!</CustomText>
          </View>
        )}
      </View>
      <View className='flex w-[95%] flex-row justify-between'>
        <TLGradientButton
          title='Continuar'
          className='w-full'
          onPress={handleSubmit(onPressContinue)}
        />
      </View>
    </View>
  );
}
