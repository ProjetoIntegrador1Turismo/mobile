import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { CustomText } from 'src/components/Text/CustomText';
import { ItineraryPointCardProps } from './ItineraryPointCard.types';
import { Badge } from 'src/components/Badge/Badge';
import { BASE_URL } from 'src/common/repositories/client';

const pointTypeTranslations = {
  HOTEL: 'Hotel',
  EXPERIENCE: 'Experiência',
  RESTAURANT: 'Restaurante',
  TOURIST_POINT: 'Ponto Turístico',
  EVENT: 'Evento',
};

export function ItineraryPointCard({
  name,
  shortDescription,
  imageCoverUrl,
  interestPointType,
  onPress,
}: ItineraryPointCardProps) {
  return (
    <TouchableOpacity onPress={onPress} className='overflow-hidden rounded-2xl bg-[#1C1C1E]'>
      <ImageBackground
        source={{ uri: `${BASE_URL}${imageCoverUrl}` }}
        className='h-48 w-full'
        resizeMode='cover'>
        <View className='h-full w-full bg-black/30'>
          <View className='absolute left-4 top-4'>
            <Badge label={pointTypeTranslations[interestPointType]} />
          </View>
        </View>
      </ImageBackground>

      <View className='p-4'>
        <CustomText size={20} weight='bold' className='text-white'>
          {name}
        </CustomText>

        <CustomText size={14} weight='regular' className='mt-2 text-gray-400'>
          {shortDescription}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
}
