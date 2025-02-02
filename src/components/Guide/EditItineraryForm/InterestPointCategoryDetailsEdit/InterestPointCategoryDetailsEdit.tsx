import { ActivityIndicator, FlatList, View } from 'react-native';
import { Content } from 'src/common/models/Category/categoryDetail.model';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';
import { Divider } from 'src/components/Divider/Divider';
import { SearchTextInputBar } from 'src/components/SearchTextInputBar/SearchTextInputBar';
import { CustomText } from 'src/components/Text/CustomText';
import { useCategoryDetailsScreenViewModel } from 'src/screens/Category/CategoryDetails/CategoryDetailsScreenViewModel';

import { InterestPointCardEdit } from '../InterestPointCardEdit/InterestPointCardEdit';

interface CategoryDetailsProps {
  categoryTitle: string;
}

export default function InterestPointCategoryDetailsEdit({ categoryTitle }: CategoryDetailsProps) {
  const { data, isLoading, handleSearchAction } = useCategoryDetailsScreenViewModel(categoryTitle);

  if (isLoading || !data) {
    return (
      <View className='flex h-screen items-center justify-center'>
        <ActivityIndicator size='large' color='white' />
      </View>
    );
  }

  return (
    <View>
      <GoBackButton className='mb-4 mt-8' />
      <SearchTextInputBar onChangeText={handleSearchAction} />
      <View className='mt-4 w-full items-center justify-center'>
        <CustomText size={24} weight='bold' className='items-center justify-center text-white'>
          {categoryTitle}
        </CustomText>
        <Divider text='Com base na categoria' />
      </View>
      <FlatList
        data={data.content}
        keyExtractor={(basicCard: Content) => basicCard.id.toString()}
        renderItem={({ item }) => <InterestPointCardEdit data={item} className='mb-[10px]' />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View className='h-[500px]' />}
      />
    </View>
  );
}
