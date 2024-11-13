import { ScrollView, View } from 'react-native';
import { CadasturMask, PhoneMask } from 'src/common/utils/masks';
import { ControlledInput } from 'src/components/Auth/ControlledInput/ControlledInput';
import { ControlledMaskedInput } from 'src/components/Auth/ControlledMaskedInput/ControlledMaskedInput';
import { RegisterStepOneFormData } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOne.types';
import { useRegisterStepOneViewModel } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOneViewModel';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';

import { ControlledCheckbox } from '../../ControlledCheckbox/ControlledCheckbox';

export function RegisterFormStepOne() {
  const { control, handleSubmit, onPressContinue, isGuide } = useRegisterStepOneViewModel();

  return (
    <View className='flex items-center gap-3'>
      <View>
        <ControlledInput<RegisterStepOneFormData>
          label='Nome'
          placeholder='Digite seu nome'
          control={control}
          name='name'
        />
        <ControlledMaskedInput<RegisterStepOneFormData>
          label='Telefone'
          placeholder='(99) 99999-9999'
          control={control}
          mask={PhoneMask}
          name='phone'
        />
        <View className='my-3 ml-2'>
          <ControlledCheckbox<RegisterStepOneFormData>
            control={control}
            label='É um guia?'
            name='isGuide'
          />
        </View>

        {isGuide ? (
          <ControlledMaskedInput<RegisterStepOneFormData>
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
          title='Acessar'
          className='w-full'
          onPress={handleSubmit(onPressContinue)}
        />
      </View>
    </View>
  );
}
