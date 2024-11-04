import { Image, View } from 'react-native';
import { CustomText } from '~/src/components/Text/CustomText';

import { CategoryCardProps } from '~/src/components/CategoryCardList/CategoryCard/CategoryCard.types';

export function CategoryCard({ title, imgSource, className }: CategoryCardProps) {
  return (
    <View className={`h-[90px] w-[362px] overflow-hidden rounded-2xl ${className}`}>
      <Image source={imgSource} className='h-full w-full object-cover opacity-90' />
      <View className='absolute left-[30px] top-[19px]'>
        <CustomText weight='bold' size={24} color='#FFFFFF'>
          {title}
        </CustomText>
      </View>
    </View>
  );
}
