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
  const { control, handleSubmit, onPressContinue, watch, errors } = useRegisterStepOneViewModel();

  const isGuide = watch('isGuide');

  return (
    <View className='flex items-center gap-1'>
      <View>
        <CustomText className='text-white'>{JSON.stringify(watch(), null, 2)}</CustomText>
        <CustomText className='text-white'>
          {JSON.stringify(
            Object.values(errors).map((item) => item.message),
            null,
            2
          )}
        </CustomText>
      </View>
      <View className='mb-7 mt-10'>
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
        <ControlledCheckbox<RegisterStepOneFormData>
          control={control}
          label='É um guia?'
          name='isGuide'
        />
        {isGuide && (
          <ControlledMaskedInput<RegisterStepOneFormData>
            control={control}
            mask={CadasturMask}
            name='cadastur'
            label='Cadastur'
            placeholder='insira seu cadastur'
          />
        )}
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
