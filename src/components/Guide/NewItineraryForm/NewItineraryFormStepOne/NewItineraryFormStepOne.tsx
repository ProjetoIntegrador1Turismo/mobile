import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { ControlledInput } from 'src/components/Auth/ControlledInput/ControlledInput';
import { CustomText } from 'src/components/Text/CustomText';

import { NewItineraryStepOneFormData } from './NewItineraryFormStepOne.types';
import { useNewItineraryFormStepOneViewModel } from './NewItineraryFormStepOneViewModel';
import { ControlledTextArea } from '../ControlledTextArea/ControlledTextArea';

import { TLGradientButton } from '~/src/components/Button/TLGradientButton/TLGradientButton';

export function NewItineraryFormStepOne() {
  const { control, handleSubmit, onPressContinue } = useNewItineraryFormStepOneViewModel();

  return (
    <View className='flex items-center gap-3'>
      <View className='flex items-center gap-3'>
        <TouchableOpacity>
          <View className='flex h-60 w-96  items-center justify-center rounded-lg bg-[#202020]'>
            <Feather name='plus' color='#FFF' size={60} />
            <CustomText className='text-white' weight='bold'>
              Adicionar imagem de capa
            </CustomText>
          </View>
        </TouchableOpacity>
        <ControlledInput<NewItineraryStepOneFormData>
          label='Título'
          placeholder='Digite o título do seu roteiro'
          control={control}
          name='title'
        />
        <ControlledInput<NewItineraryStepOneFormData>
          label='Preço médio'
          placeholder='Digite o preço médio do seu roteiro'
          control={control}
          name='averageCost'
        />
        <ControlledInput<NewItineraryStepOneFormData>
          label='Dias'
          placeholder='Digite quantos dias tem no seu roteiro'
          control={control}
          name='days'
        />
        <ControlledTextArea<NewItineraryStepOneFormData>
          control={control}
          label='Descrição'
          name='description'
          placeholder='Insira a descrição do seu roteiro'
        />
      </View>
      <TLGradientButton
        title='Continuar'
        className='w-full'
        onPress={handleSubmit(onPressContinue)}
      />
      <View className='h-40' />
    </View>
  );
}
