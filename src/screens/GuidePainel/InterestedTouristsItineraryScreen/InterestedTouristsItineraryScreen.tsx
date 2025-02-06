import { ScrollView, TouchableOpacity, View } from 'react-native';
import { NotifiedInterestCard } from 'src/components/NotifiedInterestCard/NotifiedInterestCard';
import { useGuidePanel } from '../GuidePanelScreenViewModel';
import { CustomText } from '~/src/components/Text/CustomText';
import { AntDesign } from '@expo/vector-icons';
import { useAppRouter } from '~/src/common/lib/router';

export function InterestedTouristsItineraryScreen() {
  const { notifiedInterestCards } = useGuidePanel();
  const router = useAppRouter();
  const cards = notifiedInterestCards();

  const handleClose = () => {
    router.goBack();
  };

  return (
    <View className='flex-1 items-center bg-[#171717] pt-12'>
      <View className='w-full flex-row items-center justify-between border-b border-gray-800 px-4 py-4'>
        <TouchableOpacity onPress={handleClose}>
          <AntDesign name='close' size={24} color='white' />
        </TouchableOpacity>
        <CustomText size={18} weight='bold' className='text-white'>
          Turistas Interessados
        </CustomText>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        className='flex-1 px-4'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20, alignItems: 'center' }}>
        <CustomText size={16} weight='regular' className='mb-4 w-full text-center text-gray-300'>
          {cards.length} turistas interessados em seus roteiros
        </CustomText>

        {cards && cards.length > 0 ? (
          cards.map((item, index) => (
            <View key={index} className='mb-3 w-full'>
              <NotifiedInterestCard
                userName={item.userName}
                imageUrl={item.imageUrl}
                phone={item.phone}
                email={item.email}
                itineraryTitle={item.itineraryTitle}
                itineraryId={item.itineraryId}
              />
            </View>
          ))
        ) : (
          <View className='mt-2 w-full rounded-xl border border-gray-700 bg-[#1C1C1E] p-4'>
            <CustomText className='text-center text-gray-400' size={14} weight='regular'>
              Nenhum turista interessado ainda!
            </CustomText>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
