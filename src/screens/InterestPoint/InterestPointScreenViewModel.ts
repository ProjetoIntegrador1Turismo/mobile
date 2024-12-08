import { useState } from 'react';
import { useTourPageQuery } from 'src/common/hooks/queries/useTourPageQuery';
import { BASE_URL } from '~/src/common/repositories/client';

export function useInterestPointScreenViewModel(pointId: number) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: pageData, isLoading, isError } = useTourPageQuery(pointId);

  const buildFullAddress = `${pageData?.interestPoint.address.road} - ${pageData?.interestPoint.address.number}, ${pageData?.interestPoint.address.zipCode}`;

  const handleImagePress = (image: string) => {
    setSelectedImage(`${BASE_URL}${image}`);
    setIsModalOpen(true);
  };

  const handleCloseViewer = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return {
    point: pageData?.interestPoint,
    guides: pageData?.guidesWhoOfferThisTour,
    comments: pageData?.comments,
    isLoading,
    isError,
    selectedImage,
    isModalOpen,
    buildFullAddress,
    handleImagePress,
    handleCloseViewer,
  };
}
