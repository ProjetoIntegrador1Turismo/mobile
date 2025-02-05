import { Image, TouchableOpacity, View } from 'react-native';
import { Avatar } from '../../Avatar/Avatar';
import { CustomText } from '../../Text/CustomText';
import { BASE_URL } from '~/src/common/repositories/client';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
    <View className='px-4'>
      <View className='flex h-[160px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#1C1C1E] to-black shadow-lg'>
        <Image
          source={{ uri: BASE_URL + itineraryImgUrl }}
          style={{ width: '100%', height: '100%' }}
          className='object-cover opacity-25'
        />
        <View className='absolute inset-0 flex items-center justify-between p-4'>
          <View className='mt-2 flex-row items-center'>
            <Avatar imageUrl={guideImgUrl} />
            <View className='flex-row'>
              <CustomText className='ml-2 text-white'>Guia: </CustomText>
              <CustomText className='text-white' weight='bold'>
                {truncatedName(guideName, 18)}
              </CustomText>
            </View>
          </View>
          <CustomText className='text-white' size={24} weight='bold'>
            {truncatedName(itineraryTitle, 21)}
          </CustomText>
          <View className='flex-row items-center justify-center'>
            <TouchableOpacity
              onPress={() => handleSeeDetails(itineraryId)}
              className='items-center justify-center px-6'>
              <Feather name='external-link' size={32} color='#3371E3' />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} className='items-center justify-center px-6'>
              <MaterialCommunityIcons name='trash-can' size={32} color='#FF3B30' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
