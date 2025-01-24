import { View } from 'react-native';
import UnauthenticatedImage from '../../Auth/UnauthenticatedImage/UnauthenticatedImage';
import { CustomText } from '../../Text/CustomText';

export function UnselectedItinerary() {
  return (
    <View className='items-center justify-center'>
      <UnauthenticatedImage className='h-64 w-64 ' />
      <CustomText className='text-white'>Você ainda não selecionou nenhum roteiro</CustomText>
    </View>
  );
}
