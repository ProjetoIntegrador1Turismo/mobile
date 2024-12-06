import { FlatList } from 'react-native';
import { BasicPointCardProps } from './BasicPoint/BasicPointCard.types';
import { BasicPointCard } from './BasicPoint/BasicPointCard';

export default function BasicPointCardList() {
  const BasicPointCardMock: BasicPointCardProps[] = [
    {
      id: 1,
      pointName: 'Cataratas do Iguaçu',
      averageRating: 2,
      averageValue: 200,
      imageCover: 'https://picsum.photos/600/400',
    },
    {
      id: 2,
      pointName: 'Parque das Aves',
      averageRating: 4,
      averageValue: 150,
      imageCover: 'https://picsum.photos/600/400',
    },
    {
      id: 3,
      pointName: 'Itaipu Binacional',
      averageRating: 5,
      averageValue: 300,
      imageCover: 'https://picsum.photos/600/400',
    },
  ];

  return (
    <FlatList
      data={BasicPointCardMock}
      keyExtractor={(basicCard: BasicPointCardProps) => basicCard.pointName}
      renderItem={({ item }) => <BasicPointCard data={item} className='mb-[10px]' />}
    />
  );
}

// className={cn('relative border-2 h-[85px] w-[100%] rounded-2xl flex-row', className)}
