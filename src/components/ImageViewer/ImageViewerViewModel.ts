import { Dimensions } from 'react-native';
import { ImageViewerProps } from './ImageViewer.types';

export const useImageViewerViewModel = (props: ImageViewerProps) => {
  const { visible, imageUrl, onClose } = props;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const imageStyle = {
    width: screenWidth,
    height: screenHeight * 0.7,
    resizeMode: 'contain' as const,
  };

  return {
    visible,
    imageUrl,
    onClose,
    imageStyle,
  };
};
