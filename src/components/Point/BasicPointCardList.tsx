import { FlatList, View } from 'react-native';
import { BasicPointCard } from './BasicPoint/BasicPointCard';
import { CategoryDetailModel, Content } from '~/src/common/models/Category/categoryDetail.model';

export default function BasicPointCardList(data: CategoryDetailModel) {
  return (
    <FlatList
      data={data.content}
      keyExtractor={(basicCard: Content) => basicCard.id.toString()}
      renderItem={({ item }) => <BasicPointCard data={item} className='mb-2' />}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View className='h-[100px]' />}
    />
  );
}
