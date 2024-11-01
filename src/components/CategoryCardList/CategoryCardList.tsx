import { FlatList, View } from 'react-native';
import { CategoryCard } from '~/src/components/CategoryCard/CategoryCard';
import { CategoryCardData } from '~/src/components/CategoryCard/CategoryCardViewModel'; 
import { CategoryCardProps } from '~/src/components/CategoryCard/CategoryCard.types';
import { CustomText } from '~/src/components/Text/CustomText';


export function CategoryCardList() {
    return (
      <View className='w-[362px]'>
        <CustomText size={36} >Categorias:</CustomText>
        <FlatList
          data={CategoryCardData}
          keyExtractor={(card: CategoryCardProps) => card.title}
          renderItem={({ item }) => (
            <CategoryCard title={item.title} imgSource={item.imgSource} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className='h-[20px]' />}          
        />
      </View>
    );
  }