import { View, ScrollView, TouchableOpacity } from 'react-native';
import { CustomText } from '~/src/components/Text/CustomText';
import { TopGuideCard } from '~/src/components/Guide/TopGuideCard/TopGuideCard';
import { AntDesign } from '@expo/vector-icons';
import { GuidesWhoOfferThisTour } from '~/src/common/models/InterestPointScreen/interestPointScreen.model';
import { useAppRouter } from '~/src/common/lib/router';

interface FullGuidesListProps {
  guides: GuidesWhoOfferThisTour[];
  onClose: () => void;
}

export function FullGuidesList({ guides, onClose }: FullGuidesListProps) {
  const router = useAppRouter();
  const pointId = 4;

  const handleGuidePress = () => {
    onClose();
    router.goBack();
    router.push(`/(tabs)/(search)/point/4`);
  };

  return (
    <View className='flex-1 bg-[#171717] pt-12'>
      <View className='flex-row items-center justify-between border-b border-gray-800 px-4 py-4'>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name='close' size={24} color='white' />
        </TouchableOpacity>
        <CustomText size={18} weight='bold' className='text-white'>
          Guias Disponíveis
        </CustomText>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        className='flex-1 px-4'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20 }}>
        <CustomText size={16} weight='regular' className='mb-4 text-gray-300'>
          Todos os guias que incluíram este local em seus roteiros
        </CustomText>

        {guides && guides.length > 0 ? (
          guides.map((guide) => (
            <View key={guide.id} className='mb-3'>
              <TopGuideCard
                id={guide.id}
                profileImage={guide.profileImageUrl}
                name={`${guide.firstName} ${guide.lastName}`}
                rating={guide.averageRating}
                onClick={handleGuidePress}
              />
            </View>
          ))
        ) : (
          <View className='mt-2 rounded-xl border border-gray-700 bg-[#1C1C1E] p-4'>
            <CustomText className='text-center text-gray-400' size={14} weight='regular'>
              Nenhum guia adicionou este local a um roteiro ainda!
            </CustomText>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
