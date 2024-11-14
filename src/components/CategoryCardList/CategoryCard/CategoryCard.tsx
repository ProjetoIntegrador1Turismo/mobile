import { Image, TouchableOpacity, View } from 'react-native';
import { CustomText } from '~/src/components/Text/CustomText';
import { CategoryCardProps } from '~/src/components/CategoryCardList/CategoryCard/CategoryCard.types';
import { cn } from '~/src/common/utils/cn';

export function CategoryCard({ title, imgSource, className, onPress }: CategoryCardProps) {

  return (
    <TouchableOpacity
    onPress={onPress}
    >  
    <View className={cn('h-[90px] w-[362px] overflow-hidden rounded-2xl', className)}>      
      <Image source={imgSource} className='h-full w-full object-cover' />
      <View className='absolute left-[30px] top-[19px]'>
        <CustomText weight='bold' size={24} className='text-white'>
          {title}
        </CustomText>
      </View>
    </View>
    </TouchableOpacity>
  );
}
