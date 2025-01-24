import { Image, TouchableOpacity, View } from 'react-native';
import { Avatar } from '../../Avatar/Avatar';
import { CustomText } from '../../Text/CustomText';
import { BASE_URL } from '~/src/common/repositories/client';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import { useInterestedItineraryCardViewModel } from '~/src/components/InterestedItinerary/InterestedItineraryCard/InterestItineraryCardViewModel';
import { InterestedItineraryCardProps } from '~/src/components/InterestedItinerary/InterestedItineraryCard/InterestedItineraryCard.types';

export function InterestedItineraryCard({
  itineraryId,
  guideImgUrl,
  guideName,
  itineraryTitle,
  itineraryImgUrl,
  onDelete,
}: InterestedItineraryCardProps) {
  const { truncatedName, handleSeeDetails } = useInterestedItineraryCardViewModel();

  return (
    <View className='mt-[13px] flex h-[160px] w-[360px] items-center rounded-2xl rounded-md'>
      <Image
        source={{ uri: BASE_URL + itineraryImgUrl }}
        className='h-full w-full rounded-2xl opacity-45'
        resizeMode='cover'
      />
      <View className='absolute items-center'>
        <View className='mt-4 h-auto w-auto flex-row items-center justify-center'>
          <Avatar imageUrl={guideImgUrl} />
          <View className='flex-row '>
            <CustomText className='ml-2 text-white'>Guia: </CustomText>
            <CustomText className='text-white' weight='bold'>
              {truncatedName(guideName, 18)}
            </CustomText>
          </View>
        </View>
        <CustomText className='text-white' size={24} weight='bold'>
          {truncatedName(itineraryTitle, 21)}
        </CustomText>
        <View className='flex-row'>
          <TouchableOpacity>
            <EvilIcons className='mr-12' name='external-link' size={45} color='#3371E3' />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Feather name='trash-2' size={32} color='#E22929' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
