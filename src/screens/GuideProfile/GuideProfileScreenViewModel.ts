import { useState } from 'react';
import { useGuideProfileQuery } from 'src/common/hooks/queries/useGuideProfileQuery';
import { BASE_URL } from 'src/common/repositories/client';

interface GuideProfileScreenViewModelProps {
  guideId: number;
}

export function useGuideProfileScreenViewModel({ guideId }: GuideProfileScreenViewModelProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: guide, isLoading, isError } = useGuideProfileQuery(guideId);

  const handleImagePress = (image: string) => {
    setSelectedImage(`${BASE_URL}${image}`);
    setIsModalOpen(true);
  };

  const handleCloseViewer = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return {
    guide,
    isLoading,
    isError,
    selectedImage,
    isModalOpen,
    handleImagePress,
    handleCloseViewer,
  };
}
