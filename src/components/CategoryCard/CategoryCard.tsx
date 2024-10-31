import { Image, StyleSheet, View, Text } from "react-native"
import { CustomText } from "../Text/CustomText"

import hotel from '~/assets/category-card-hotel.png'

interface CategoryCardProps {
    title: string;
    // imgSource?: string;
}

export function CategoryCard({ title } : CategoryCardProps){
    return (
        <View className="w-[362px] h-[90px] rounded-2xl overflow-hidden"
        >
            <Image 
            source={hotel}
            className="w-full h-full object-cover"
            />
            <View className="absolute left-[25px] top-[8px]">
                <CustomText 
                weight='bold'
                size={24}
                color='#FFFFFF'
                >{title}</CustomText>
            </View>
        </View>
    )
}


