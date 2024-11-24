import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { useInterestPointScreenViewModel } from './InterestPointScreenViewModel';
import { CustomText } from 'src/components/Text/CustomText';
import { LogoTl } from 'src/components/Logo/LogoTL';
import { AntDesign } from '@expo/vector-icons';
import { useAppRouter } from 'src/common/lib/router';
import { CardSlider } from 'src/components/Slider/CardSlider';
import { ImageViewer } from 'src/components/ImageViewer/ImageViewer';

interface InterestPointScreenProps {
  pointId: number;
}

export function InterestPointScreen({ pointId }: InterestPointScreenProps) {
  const { point, loading, selectedImage, handleImagePress, handleCloseViewer } = useInterestPointScreenViewModel(pointId);
  const { goBack } = useAppRouter();

  if (loading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (!point) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>Point not found</Text>
      </View>
    );
  }

  const allImages = [point.imageCover, ...point.imageGallery];

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
          <LogoTl className='mb-2' />
          <View style={{ width: 30 }} />
        </View>
        <View className='w-full'>
          <CustomText size={24} weight='bold' className='mt-8 text-center text-white'>
            {point.name}
          </CustomText>
          <View className='mt-8'>
            <CardSlider
              data={allImages}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className='mx-4 overflow-hidden rounded-2xl'
                  onPress={() => handleImagePress(item)}>
                  <Image
                    source={{ uri: item }}
                    style={{ width: 260, height: 200 }}
                    className='rounded-2xl'
                  />
                </TouchableOpacity>
              )}
              className='w-full'
              ItemSeparatorComponent={() => <View className='w-1' />}
            />
          </View>
        </View>
      </View>
      <ImageViewer
        visible={!!selectedImage}
        imageUrl={selectedImage || ''}
        onClose={handleCloseViewer}
      />
    </ScrollView>
  );
}
