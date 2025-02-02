import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Image } from 'react-native';
import { InputError } from 'src/components/Auth/InputError/InputError';
import { CoverPickerProps } from 'src/components/Guide/NewItineraryForm/CoverPicker/CoverPicker.types';
import { CustomText } from 'src/components/Text/CustomText';

export default function CoverPicker({ onPressAddCoverImage, uri, coverError }: CoverPickerProps) {
  if (uri) {
    return (
      <TouchableOpacity onPress={onPressAddCoverImage} className='flex items-center gap-2'>
        <Image
          source={{ uri }}
          className='flex h-60 w-96  items-center justify-center rounded-lg bg-[#202020]'
        />
        <InputError>{coverError}</InputError>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPressAddCoverImage} className='flex items-center gap-2'>
      <View className='flex h-60 w-96  items-center justify-center rounded-lg bg-[#202020]'>
        <Feather name='plus' color='#FFF' size={60} />
        <CustomText className='text-white' weight='bold'>
          Adicionar imagem de capa
        </CustomText>
      </View>
      <InputError>{coverError}</InputError>
    </TouchableOpacity>
  );
}
