import { View } from 'react-native';
import React from 'react';
import { GuidesWhoOfferThisTour } from 'src/common/models/InterestPointScreen/interestPointScreen.model';
import { CustomText } from 'src/components/Text/CustomText';
import { TopGuideCard } from 'src/components/Guide/TopGuideCard/TopGuideCard';
import { SolidButton } from '~/src/components/Button/SolidButton/SolidButton';
import { useAppRouter } from '~/src/common/lib/router';

interface InterestPointGuidesSectionProps {
  guides: GuidesWhoOfferThisTour[];
  pointId: number;
}

export default function InterestPointGuidesSection({ guides, pointId }: InterestPointGuidesSectionProps) {
  const hasGuides = guides.length > 0;
  const router = useAppRouter();

  const handleSeeMorePress = () => {
    router.push(`/(modals)/full-guides-list?pointId=${pointId}`);
  };


  return (
    <View className='flex w-full flex-col'>
      <CustomText className='text-white' size={24} weight='bold'>
        Guias
      </CustomText>
      <CustomText className='text-white' size={14} weight='regular'>
        Guias que ofertam este passeio
      </CustomText>

      <View className='mt-4'>
        {hasGuides ? (
          <>
            {guides.slice(0, 2).map((guide) => (
              <View key={guide.id} className='mb-2'>
                <TopGuideCard
                  id={guide.id}
                  profileImage={guide.profileImageUrl}
                  name={guide.firstName + " " + guide.lastName}
                  rating={guide.averageRating}
                />
              </View>
            ))}
            <SolidButton 
              title={`Ver ${guides.length > 2 ? 'mais' : 'todos'} os guias`}
              size='sm' 
              className='mt-4 self-center px-6' 
              py={2}
              onPress={handleSeeMorePress}
            />
          </>
        ) : (
          <View className='mt-2 rounded-xl border border-gray-700 bg-[#1C1C1E] p-4'>
            <CustomText className='text-center text-gray-400' size={14} weight='regular'>
              Nenhum guia adicionou este local a um roteiro ainda!
            </CustomText>
          </View>
        )}
      </View>
    </View>
  );
}
