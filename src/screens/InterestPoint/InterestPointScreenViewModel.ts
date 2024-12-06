import { useEffect, useState } from 'react';
import { TourPageData } from 'src/screens/InterestPoint/interestPointScreen.types';

export function useInterestPointScreenViewModel(pointId: number) {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState<TourPageData | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPoint = async () => {
      try {
        const mockData: TourPageData = {
          interestPoint: {
            id: pointId,
            name: 'Cataratas do Iguaçu',
            address: {
              street: 'Avenida das Cataratas',
              city: 'Foz do Iguaçu',
              state: 'PR',
              zipCode: '85855-750',
            },
            averageValue: 150.0,
            shortDescription: 'Uma das mais impressionantes maravilhas naturais do mundo',
            longDescription:
              "As Cataratas do Iguaçu são um espetáculo natural único, com mais de 275 quedas d'água espalhadas ao longo de 2,7 km no Rio Iguaçu. É uma das maiores e mais impressionantes quedas d'água do mundo, sendo considerada uma das Novas 7 Maravilhas da Natureza.",
            starsNumber: 5,
            isResort: false,
            breakfastIncluded: false,
            foodType: 'Diversos',
            date: '2024-01-20',
            duration: '4h',
            requiredAge: '5+',
            imageCoverUrl:
              'https://plus.unsplash.com/premium_photo-1697729979889-31ec7ecf6f06?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            images: [
              'https://images.unsplash.com/photo-1559668396-7dfc173152ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1559668396-7dfc173152ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ],
            averageRating: '4.8',
          },
          guidesWhoOfferThisTour: [
            {
              id: 1,
              firstName: 'João',
              lastName: 'Silva',
              averageRating: 4.9,
              profileImageUrl: 'https://i.pravatar.cc/150?img=1',
            },
            {
              id: 2,
              firstName: 'Maria',
              lastName: 'Santos',
              averageRating: 4.7,
              profileImageUrl: 'https://i.pravatar.cc/150?img=2',
            },
          ],
          comments: [
            {
              id: 1,
              text: 'Experiência incrível! O guia foi muito atencioso e conhecedor.',
              wasVisitingDate: '2023-12-15',
              rating: 5,
              tourist: {
                id: 1,
                touristName: 'Carlos Oliveira',
                profileImageUrl: 'https://i.pravatar.cc/150?img=3',
              },
            },
          ],
        };
        setPageData(mockData);
      } catch (error) {
        console.error('Error fetching point:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoint();
  }, [pointId]);

  const buildFullAddress = `${pageData?.interestPoint.address.street} - ${pageData?.interestPoint.address.city}, ${pageData?.interestPoint.address.state}`;

  const handleImagePress = (image: string) => {
    setSelectedImage(image);
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
    loading,
    selectedImage,
    isModalOpen,
    buildFullAddress,
    handleImagePress,
    handleCloseViewer,
  };
}
