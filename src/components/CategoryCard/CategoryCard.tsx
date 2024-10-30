import { Image, StyleSheet, View, Text } from "react-native"
import { CustomText } from "../Text/CustomText"

import hotel from '../../../assets/category-card-hotel.png'

interface CategoryCardProps {
    title: string;
    // imgSource?: string;
}

export function CategoryCard({ title } : CategoryCardProps){
    return (
        <View style={style.container}>
            <Image 
            source={hotel}
            />
            <View style={style.overlay}>
                <CustomText 
                weight='bold'
                size={24}
                color='#FFFFFF'
                >{title}</CustomText>
            </View> 

        </View>
    )
}


const style = StyleSheet.create({
    
    container:{
        borderWidth: 1,
        width: 362,
        height: 90,
        borderColor: 'black',
        borderRadius: 11,
        margin: 5,
        overflow: 'hidden',
    }, 

    overlay: {
        position: "absolute",
        top: 8,
        left: 25,
    },
    


    

})

