import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { ControlledInput } from 'src/components/Auth/ControlledInput/ControlledInput';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';

import { NewItineraryStepOneFormData } from './NewItineraryFormStepOne.types';
import { useNewItineraryFormStepOneViewModel } from './NewItineraryFormStepOneViewModel';
import { ControlledTextArea } from '../ControlledTextArea/ControlledTextArea';
import CoverPicker from '../CoverPicker/CoverPicker';

export function NewItineraryFormStepOne() {
  const { control, handleSubmit, onPressContinue, onPressAddCoverImage, uri, coverError } =
    useNewItineraryFormStepOneViewModel();

  return (
    <View className='flex items-center gap-3'>
      <View className='flex items-center gap-3'>
        <CoverPicker
          onPressAddCoverImage={onPressAddCoverImage}
          uri={uri}
          coverError={coverError}
        />
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
          numeric
        />
        <ControlledInput<NewItineraryStepOneFormData>
          label='Dias'
          placeholder='Digite quantos dias tem no seu roteiro'
          control={control}
          name='days'
          numeric
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
