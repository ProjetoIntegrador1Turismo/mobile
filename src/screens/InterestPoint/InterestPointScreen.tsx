import { AntDesign } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAppRouter } from 'src/common/lib/router';
import { BASE_URL } from 'src/common/repositories/client';
import { TLGradientButton } from 'src/components/Button/TLGradientButton/TLGradientButton';
import { ImageViewer } from 'src/components/ImageViewer/ImageViewer';
import { LogoTl } from 'src/components/Logo/LogoTL';
import { CardSlider } from 'src/components/Slider/CardSlider';
import { CustomText } from 'src/components/Text/CustomText';
import Toast from 'react-native-toast-message';

import { useInterestPointScreenViewModel } from './InterestPointScreenViewModel';

import { InterestPointGuidesSection } from 'src/components/Guide/InterestPointGuidesSection/InterestPointGuidesSection';
import { AddressLabel } from 'src/components/InterestPoint/AddressLabel/AddressLabel';
import { Price } from 'src/components/Price/Price';
import { Stars } from 'src/components/Stars/Stars';

import { InterestPointCommentsSection } from 'src/components/Comment/InterestPointCommentsSection/InterestPointCommentsSection';
import { GoBackButton } from '~/src/components/Button/GoBackButton/GoBackButton';

interface InterestPointScreenProps {
  pointId: number;
}

export function InterestPointScreen({ pointId }: InterestPointScreenProps) {
  const {
    point,
    guides,
    comments,
    isLoading,
    isError,
    selectedImage,
    isModalOpen,
    buildFullAddress,
    handleImagePress,
    handleCloseViewer,
    handleInterestPress,
    scrollViewRef,
  } = useInterestPointScreenViewModel(pointId);
  const { goBack } = useAppRouter();
  const router = useAppRouter();

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' color='white'/>
      </View>
    );
  }

  if (isError || !point) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao carregar ponto turístico',
      text2: 'Tente novamente mais tarde',
    });
    router.goBack();
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        className='flex-1 bg-black'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
        automaticallyAdjustContentInsets={false}>
        <View className='flex-1'>
        <View className='flex-row items-center justify-between px-4 pt-12'>
          <View className='flex-1'>
            <GoBackButton />
          </View>
          
          <View className='flex-1 items-center justify-center'>
            <LogoTl />
          </View>
          
          <View className='flex-1' />
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
                <TLGradientButton
                  title='Tenho Interesse!'
                  className='w-11/12'
                  onPress={handleInterestPress}
                />
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

                <View className='mb-4 mt-6 flex w-full flex-row gap-x-12'>
                  <View>
                    <CustomText size={20} weight='regular' className='text-white'>
                      Preço:
                    </CustomText>

                    <Price priceLevel={Math.ceil(point.averageValue / 50)} size={24} variant='dark' />
                  </View>
                  <View>
                    <CustomText size={20} weight='regular' className='text-white'>
                      Duração:
                    </CustomText>
                    <View className='flex flex-row items-center gap-x-2'>
                      <FontAwesome name='clock-o' size={24} color='white' />
                      <CustomText size={18} weight='regular' className='text-white'>
                        {point.duration}
                      </CustomText>
                    </View>
                  </View>
                </View>
                <View className='mt-4'>
                  <CustomText size={20} weight='bold' className='mb-2 text-white'>
                    Descrição
                  </CustomText>
                  <CustomText size={16} weight='regular' className='mb-4 text-gray-300'>
                    {point.shortDescription}
                  </CustomText>
                  <CustomText size={16} weight='regular' className='text-gray-300'>
                    {point.longDescription}
                  </CustomText>
                </View>

              <View className='mt-8 w-full items-center'>
                <InterestPointGuidesSection guides={guides || []} pointId={pointId} />
              </View>

                <View className='mt-8 w-full items-center'>
                  <InterestPointCommentsSection 
                    comments={comments || []} 
                    pointId={pointId}
                    onAddCommentPress={() => router.push(`/(modals)/add-comment?pointId=${pointId}`)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <ImageViewer
        visible={isModalOpen}
        imageUrl={selectedImage || ''}
        onClose={handleCloseViewer}
      />
    </GestureHandlerRootView>
  );
}
