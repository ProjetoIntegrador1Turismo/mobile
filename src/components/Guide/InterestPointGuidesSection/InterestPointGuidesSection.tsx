import { View } from 'react-native';
import React from 'react';
import { GuidesWhoOfferThisTour } from 'src/common/models/InterestPointScreen/interestPointScreen.model';
import { CustomText } from 'src/components/Text/CustomText';
import { TopGuideCard } from 'src/components/Guide/TopGuideCard/TopGuideCard';
import { SolidButton } from '~/src/components/Button/SolidButton/SolidButton';

export default function InterestPointGuidesSection({ guides }: { guides: GuidesWhoOfferThisTour[] }) {
  const hasGuides = guides.length > 0;

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
            {guides.map((guide) => (
              <View key={guide.id} className='mb-2'>
                <TopGuideCard
                  id={guide.id}
                  profileImage={guide.profileImageUrl}
                  name={guide.firstName + " " + guide.lastName}
                  rating={guide.averageRating}
                />
              </View>
            ))}
            <SolidButton title='Ver mais' size='sm' className='mt-4 self-center px-6' py={2} />
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
