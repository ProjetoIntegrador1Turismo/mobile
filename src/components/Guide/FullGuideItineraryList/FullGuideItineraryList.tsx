import { View, ScrollView, TouchableOpacity } from 'react-native';
import { CustomText } from '~/src/components/Text/CustomText';
import { AntDesign } from '@expo/vector-icons';
import { GuideItineraryCard } from '../GuideItineraryCard/GuideItineraryCard';
import { FullGuideItineraryListProps } from './FullGuideItineraryList.types';
import { BASE_URL } from '~/src/common/repositories/client';

export function FullGuideItineraryList({
  guide,
  itineraries,
  onClose,
}: FullGuideItineraryListProps) {
  return (
    <View className='flex-1 bg-[#171717] pt-12'>
      <View className='flex-row items-center justify-between border-b border-gray-800 px-4 py-4'>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name='close' size={24} color='white' />
        </TouchableOpacity>
        <CustomText size={18} weight='bold' className='text-white'>
          Roteiros do Guia
        </CustomText>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        className='flex-1 px-4'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20 }}>
        <CustomText size={16} weight='regular' className='mb-4 text-gray-300'>
          Todos os roteiros disponíveis deste guia
        </CustomText>

        <View className='gap-y-4'>
          {itineraries.map((itinerary) => (
            <GuideItineraryCard
              key={itinerary.id}
              itineraryId={itinerary.id}
              guide={{
                name: guide.firstName + ' ' + guide.lastName,
                profileImage: guide.profileImageUrl,
              }}
              title={itinerary.title}
              backgroundImage={`${BASE_URL}${itinerary.imageCoverUrl}`}
              onPress={() => {}}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
