import React from 'react';
import { View, Modal, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ImageViewerProps } from './ImageViewer.types';
import { useImageViewerViewModel } from './ImageViewerViewModel';

export function ImageViewer(props: ImageViewerProps) {
  const { visible, imageUrl, onClose, imageStyle } = useImageViewerViewModel(props);

  return (
    <Modal visible={visible} transparent={true} animationType='fade' onRequestClose={onClose}>
      <View className='flex-1 items-center justify-center bg-black/90'>
        <TouchableOpacity onPress={onClose} className='absolute right-4 top-12 z-10'>
          <AntDesign name='close' size={30} color='white' />
        </TouchableOpacity>
        <Image source={{ uri: imageUrl }} style={imageStyle} />
      </View>
    </Modal>
  );
}
