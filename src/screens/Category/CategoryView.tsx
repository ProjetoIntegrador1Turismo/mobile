import { View } from 'react-native';
import { CategoryCardList } from '~/src/components/CategoryCardList/CategoryCardList';
import { SearchTextInputBar } from '~/src/components/SearchTextInputBar/SearchTextInputBar';
import { onMakeSearchOrder } from './CategoryViewViewModel';

export default function CategoryView() {

  const { handleOnMakeSearchOrder } = onMakeSearchOrder();

  return (
    <View className='mt-[60px]'>
      <SearchTextInputBar onSubmitEditing={handleOnMakeSearchOrder} />
      <CategoryCardList />
    </View>
  );
}
