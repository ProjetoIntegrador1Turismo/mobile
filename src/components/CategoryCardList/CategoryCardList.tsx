import { FlatList, TouchableOpacity, View } from 'react-native';
import { CategoryCard } from '~/src/components/CategoryCardList/CategoryCard/CategoryCard';
import {
  CategoryCardData,
  onPressCategoryCard,
} from '~/src/components/CategoryCardList/CategoryCard/CategoryCardViewModel';
import { CategoryCardProps } from '~/src/components/CategoryCardList/CategoryCard/CategoryCard.types';
import { CustomText } from '~/src/components/Text/CustomText';

export function CategoryCardList() {
  return (
    <View className='w-[362px]'>
      <CustomText size={36}>Categorias:</CustomText>
      <FlatList
        data={CategoryCardData}
        keyExtractor={(card: CategoryCardProps) => card.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPressCategoryCard(item.title)}
            className='mb-[20px]'>
            <CategoryCard title={item.title} imgSource={item.imgSource} />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
