import React from 'react';
import { View, FlatList } from 'react-native';
import UnauthenticatedImage from 'src/components/Auth/UnauthenticatedImage/UnauthenticatedImage';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { CustomText } from 'src/components/Text/CustomText';

import { useEditItineraryFormStepTwoViewModel } from './EditItineraryFormStepTwoViewModel';
import { SelectedInterestPointCard } from '../../NewItineraryForm/SelectedInterestPointCard/SelectedInterestPointCard';

export default function EditItineraryFormStepTwo() {
  const { handleSubmit, onPressCreate, interestPointIds, isPending, removeInterestPoint } =
    useEditItineraryFormStepTwoViewModel();

  return (
    <View className='flex h-full w-full flex-1'>
      <View>
        <FlatList
          className='w-full bg-tl-bg'
          data={interestPointIds}
          keyExtractor={(item) => item.toString()}
          contentContainerClassName='items-center justify-center flex gap-3'
          renderItem={({ item }) => (
            <SelectedInterestPointCard onPressRemove={() => removeInterestPoint(item)} id={item} />
          )}
          ListEmptyComponent={
            <View className='h-[400px] items-center justify-center'>
              <View>
                <UnauthenticatedImage className='h-64 w-64 ' />
                <CustomText className='text-white'>Adicione um ponto no seu roteiro!</CustomText>
              </View>
            </View>
          }
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View className='h-[10px]' />}
        />
      </View>

      <TLGradientButton
        title='Criar roteiro'
        className='mt-10'
        disabled={isPending}
        onPress={handleSubmit(onPressCreate)}
      />
    </View>
  );
}
