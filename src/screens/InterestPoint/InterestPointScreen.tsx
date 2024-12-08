import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import { useInterestPointScreenViewModel } from './InterestPointScreenViewModel';
import { CustomText } from 'src/components/Text/CustomText';
import { LogoTl } from 'src/components/Logo/LogoTL';
import { AntDesign } from '@expo/vector-icons';
import { useAppRouter } from 'src/common/lib/router';
import { CardSlider } from 'src/components/Slider/CardSlider';
import { ImageViewer } from 'src/components/ImageViewer/ImageViewer';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { AddressLabel } from '~/src/components/InterestPoint/AddressLabel/AddressLabel';
import { Stars } from '~/src/components/Stars/Stars';
import { Price } from '~/src/components/Price/Price';
import { BASE_URL } from 'src/common/repositories/client';

import TopGuidesSection from '~/src/components/Guide/TopGuidesSection/TopGuidesSection';

interface InterestPointScreenProps {
  pointId: number;
}

export function InterestPointScreen({ pointId }: InterestPointScreenProps) {
  const {
    point,
    isLoading,
    isError,
    buildFullAddress,
    selectedImage,
    isModalOpen,
    handleImagePress,
    handleCloseViewer,
  } = useInterestPointScreenViewModel(pointId);
  const { goBack } = useAppRouter();

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (isError || !point) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>Error: Point not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      className='flex-1'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
      automaticallyAdjustContentInsets={false}>
      <View className='flex-1'>
        <View className='flex-row items-center justify-between px-4 pt-12'>
          <TouchableOpacity onPress={goBack}>
            <AntDesign name='arrowleft' size={30} color='white' />
          </TouchableOpacity>
          <LogoTl className='absolute left-0 right-0 mx-auto' />
          <View style={{ width: 30 }} />
        </View>
        <View className='w-full'>
          <CustomText size={24} weight='bold' className='mt-8 text-center text-white'>
            {point.name}
          </CustomText>
          <View className='mt-4'>
            {/* Galeria */}
            <View className='mt-4'>
              <CardSlider
                data={point.images}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className='mx-4 overflow-hidden rounded-2xl'
                    onPress={() => handleImagePress(item)}>
                    <Image
                      source={{ uri: `${BASE_URL}${item}` }}
                      style={{ width: 260, height: 200 }}
                      className='rounded-2xl'
                    />
                  </TouchableOpacity>
                )}
                className='w-full'
                ItemSeparatorComponent={() => <View className='w-1' />}
              />
            </View>

            {/* Botão */}
            <View className='mt-8 flex flex-row items-center justify-center'>
              <TLGradientButton title='Tenho Interesse!' size='lg' />
            </View>

            {/* View das coisas */}
            <View className='items-start px-6'>
              <View className='mt-8 flex flex-row items-center justify-start'>
                <AddressLabel address={buildFullAddress} className='mb-4' />
              </View>

              <Stars
                rating={Number(point.averageRating)}
                label='Avaliação geral:'
                className='items-start'
                starSize={20}
                textSize={16}
              />

              <CustomText size={20} weight='regular' className='mt-4 text-white'>
                Preço:
              </CustomText>
              <Price priceLevel={Math.ceil(point.averageValue / 50)} size={24} variant='dark' />

              <View className='mt-4'>
                <CustomText size={20} weight='bold' className='mb-2 text-white'>
                  Descrição
                </CustomText>
                <CustomText size={16} weight='regular' className='text-gray-300'>
                  {point.longDescription}
                </CustomText>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageViewer
        visible={isModalOpen}
        imageUrl={selectedImage || ''}
        onClose={handleCloseViewer}
      />
    </ScrollView>
  );
}
