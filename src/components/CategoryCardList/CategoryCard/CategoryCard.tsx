import { Image, TouchableOpacity, View } from 'react-native';
import { CustomText } from '~/src/components/Text/CustomText';

import { CategoryCardProps } from '~/src/components/CategoryCardList/CategoryCard/CategoryCard.types';
import { onPressCategoryCard } from '~/src/components/CategoryCardList/CategoryCard/CategoryCardViewModel'
import { cn } from '~/src/common/utils/cn';

export function CategoryCard({ title, imgSource, className }: CategoryCardProps) {
  return (
    <TouchableOpacity
    onPress={() => onPressCategoryCard(title)}
    >  
    <View className={cn('h-[90px] w-[362px] overflow-hidden rounded-2xl', className)}>      
      <Image source={imgSource} className='h-full w-full object-cover opacity-90' />
      <View className='absolute left-[30px] top-[19px]'>
        <CustomText weight='bold' size={24} color='#FFFFFF'>
          {title}
        </CustomText>
      </View>
    </View>
    </TouchableOpacity>
  );
}
