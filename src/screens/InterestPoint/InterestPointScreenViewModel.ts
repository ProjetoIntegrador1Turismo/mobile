import { useEffect, useState } from 'react';
import { InterestPoint } from 'src/common/models/interestpoint.model';


export function useInterestPointScreenViewModel(pointId: number) {
  const [loading, setLoading] = useState(true);
  const [point, setPoint] = useState<InterestPoint | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchPoint = async () => {
      try {
        const mockPoint: InterestPoint = {
          id: pointId,
          name: 'Sample Point',
          description: 'Sample description',
          imageCover:
            'https://plus.unsplash.com/premium_photo-1697729979889-31ec7ecf6f06?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageGallery: [
            'https://images.unsplash.com/photo-1559668396-7dfc173152ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1559668396-7dfc173152ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
          duration: '2h',
          priceLevel: 2,
        };
        setPoint(mockPoint);
      } catch (error) {
        console.error('Error fetching point:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoint();
  }, [pointId]);

  const handleImagePress = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  return {
    point,
    loading,
    selectedImage,
    handleImagePress,
    handleCloseViewer,
  };
}