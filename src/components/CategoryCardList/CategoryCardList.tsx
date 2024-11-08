import { FlatList, View } from 'react-native';
import { CategoryCard } from '~/src/components/CategoryCardList/CategoryCard/CategoryCard';
import { CategoryCardData } from '~/src/components/CategoryCardList/CategoryCard/CategoryCardViewModel';
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
          <CategoryCard title={item.title} imgSource={item.imgSource} className='mb-[20px]'/>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
