import { FlatList, View } from 'react-native';
import { BasicPointCard } from './BasicPoint/BasicPointCard';
import { CategoryDetailModel, Content } from '~/src/common/models/Category/categoryDetail.model';

export default function BasicPointCardList(data: CategoryDetailModel) {
  return (
    <View className='flex-1'>
      <FlatList
        data={data.content}
        keyExtractor={(basicCard: Content) => basicCard.id.toString()}
        renderItem={({ item }) => <BasicPointCard data={item} className='mb-2' />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
