import { Image, View } from 'react-native'
import { CustomText } from '~/src/components/Text/CustomText'

import { CategoryCardProps } from '~/src/components/CategoryCard/CategoryCard.types'

export function CategoryCard({ title, imgSource } : CategoryCardProps){
    return (
        <View className='w-[362px] h-[90px] rounded-2xl overflow-hidden'
        >
            <Image 
            source={imgSource}
            className='w-full h-full object-cover opacity-90'
            />
            <View className='absolute left-[25px] top-[8px]'>
                <CustomText 
                weight='bold'
                size={24}
                color='#FFFFFF'
                >{title}</CustomText>
            </View>
        </View>
    )
}


