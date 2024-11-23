import { useEffect, useState } from 'react';
import { InterestPoint } from 'src/common/models/interestpoint.model';


export const useInterestPointScreenViewModel = (pointId: number) => {
  const [point, setPoint] = useState<InterestPoint | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPoint = async () => {
      try {
        const mockPoint: InterestPoint = {
          id: pointId,
          name: 'Sample Point',
          description: 'Sample description',
          imageCover: 'https://example.com/image.jpg',
          imageGallery: ['https://example.com/gallery1.jpg', 'https://example.com/gallery2.jpg'],
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

  return {
    point,
    loading,
  };
};