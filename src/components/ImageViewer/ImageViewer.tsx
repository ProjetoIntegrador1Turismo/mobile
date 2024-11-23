import React from 'react';
import { View, Modal, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ImageViewerProps } from './ImageViewer.types';
import { useImageViewerViewModel } from './ImageViewerViewModel';

export function ImageViewer(props: ImageViewerProps) {
  const { visible, imageUrl, onClose, imageStyle } = useImageViewerViewModel(props);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/90 justify-center items-center">
        <TouchableOpacity
          onPress={onClose}
          className="absolute top-12 right-4 z-10"
        >
          <AntDesign name="close" size={30} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: imageUrl }}
          style={imageStyle}
        />
      </View>
    </Modal>
  );
}
