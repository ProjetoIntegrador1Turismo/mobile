import { Divider } from "~/src/components/Divider/Divider";
import { CategoryDetailsProps } from "./CategoryDetailsView.types";
import { TouchableOpacity, View } from "react-native";
import { CustomText } from "~/src/components/Text/CustomText";
import AntDesign from '@expo/vector-icons/AntDesign';
import { SearchTextInputBar } from "~/src/components/SearchTextInputBar/SearchTextInputBar";
import { useAppRouter } from 'src/common/lib/router';


export default function CategoryDetailsView({ categoryTitle }:CategoryDetailsProps){
    
    const { goBack } = useAppRouter();


    return (
        <View>
            <TouchableOpacity className='mt-6 mb-6' onPress={goBack}>
                <AntDesign name='arrowleft' size={30} color='white' />
            </TouchableOpacity>
            <SearchTextInputBar />
            <View className='w-full items-center justify-center mt-6'>
                <CustomText
                size={24}
                weight='bold'
                className='text-white items-center justify-center'>
                    {categoryTitle}
                </CustomText>
            <Divider text='Com base na categoria' ></Divider>
            </View>
        </View>    
    )
}