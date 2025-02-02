import { FlatList, View } from 'react-native';
import { CategoryCard } from 'src/components/CategoryCardList/CategoryCard/CategoryCard';
import { CategoryCardProps } from 'src/components/CategoryCardList/CategoryCard/CategoryCard.types';
import { CategoryCardData } from 'src/components/CategoryCardList/CategoryCard/CategoryCardViewModel';
import { CustomText } from 'src/components/Text/CustomText';

import { useInterestPointCategoryListViewModel } from './InterestPointCategoryListViewModel';

export function InterestPointCategoryList() {
  const { handleCategoryPress } = useInterestPointCategoryListViewModel();

  return (
    <View className='min-w-[362px]'>
      <CustomText className='mt-[30px] text-white' size={36}>
        Categorias:
      </CustomText>
      <FlatList
        data={CategoryCardData.slice(0, -1)}
        keyExtractor={(card: CategoryCardProps) => card.title}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            imgSource={item.imgSource}
            className='mb-[20px]'
            onPress={() => handleCategoryPress(item.title)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View className='h-[200px]' />}
      />
    </View>
  );
}
