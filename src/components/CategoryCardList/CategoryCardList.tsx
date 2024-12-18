import { FlatList, View } from 'react-native';
import { CategoryCard } from '~/src/components/CategoryCardList/CategoryCard/CategoryCard';
import {
  CategoryCardData,
  onPressCategoryCard,
} from '~/src/components/CategoryCardList/CategoryCard/CategoryCardViewModel';
import { CategoryCardProps } from '~/src/components/CategoryCardList/CategoryCard/CategoryCard.types';
import { CustomText } from '~/src/components/Text/CustomText';

export function CategoryCardList() {
  const { handlePressCategoryCard } = onPressCategoryCard();

  return (
    <View className='min-w-[362px]'>
      <CustomText className='mt-[30px] text-white' size={36}>
        Categorias:
      </CustomText>
      <FlatList
        data={CategoryCardData}
        keyExtractor={(card: CategoryCardProps) => card.title}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            imgSource={item.imgSource}
            className='mb-[20px]'
            onPress={() => handlePressCategoryCard(item.title)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View className='h-[200px]' />}
      />
    </View>
  );
}
