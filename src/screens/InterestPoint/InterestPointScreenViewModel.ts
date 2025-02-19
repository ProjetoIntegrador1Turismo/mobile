import { useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { useTourPageQuery } from 'src/common/hooks/queries/useTourPageQuery';
import { BASE_URL } from 'src/common/repositories/client';

export function useInterestPointScreenViewModel(pointId: number) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: pageData, isLoading, isError } = useTourPageQuery(pointId);
  const scrollViewRef = useRef<ScrollView>(null);

  const point = pageData?.interestPoint;
  const buildFullAddress = point
    ? `${point.address.road} - ${point.address.number}, ${point.address.zipCode}`
    : '';

  const handleImagePress = (image: string) => {
    setSelectedImage(`${BASE_URL}${image}`);
    setIsModalOpen(true);
  };

  const handleCloseViewer = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleInterestPress = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
    Toast.show({
      type: 'success',
      text1: 'Dica!',
      text2: 'Escolha um guia abaixo para ver os roteiros disponíveis.',
    });
  };

  return {
    point,
    guides: pageData?.guidesWhoOfferThisTour || [],
    comments: pageData?.comments || [],
    isLoading,
    isError,
    handleImagePress,
    handleInterestPress,
    isModalOpen,
    selectedImage,
    handleCloseViewer,
    buildFullAddress,
    scrollViewRef,
  };
}
