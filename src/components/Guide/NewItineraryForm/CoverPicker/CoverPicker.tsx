import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { View, TouchableOpacity } from 'react-native';
import { CoverPickerProps } from 'src/components/Guide/NewItineraryForm/CoverPicker/CoverPicker.types';
import { CustomText } from 'src/components/Text/CustomText';

export default function CoverPicker({ onPressAddCoverImage, uri }: CoverPickerProps) {
  if (uri) {
    return (
      <TouchableOpacity onPress={onPressAddCoverImage}>
        <Image
          source={{ uri }}
          className='flex h-60 w-96  items-center justify-center rounded-lg bg-[#202020]'
        />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPressAddCoverImage}>
      <View className='flex h-60 w-96  items-center justify-center rounded-lg bg-[#202020]'>
        <Feather name='plus' color='#FFF' size={60} />
        <CustomText className='text-white' weight='bold'>
          Adicionar imagem de capa
        </CustomText>
      </View>
    </TouchableOpacity>
  );
}
