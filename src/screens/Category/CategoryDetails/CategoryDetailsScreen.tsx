import { Divider } from "~/src/components/Divider/Divider";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import { CustomText } from "~/src/components/Text/CustomText";
import AntDesign from '@expo/vector-icons/AntDesign';
import { SearchTextInputBar } from "~/src/components/SearchTextInputBar/SearchTextInputBar";
import { useAppRouter } from 'src/common/lib/router';
import { useCategoryDetailsScreenViewModel } from "./CategoryDetailsScreenViewModel";
import { BasicPointCard } from "~/src/components/Point/BasicPoint/BasicPointCard";
import { GoBackButton } from "~/src/components/Button/GoBackButton/GoBackButton";

interface CategoryDetailsProps {
    categoryTitle: string;
}


export default function CategoryDetailsScreen({ categoryTitle }:CategoryDetailsProps){
    const { data, loading } = useCategoryDetailsScreenViewModel(categoryTitle);
    const { goBack } = useAppRouter();


    // if (loading) {
    //     return (
    //       <View className='flex-1 items-center justify-center'>
    //         <ActivityIndicator size='large' />
    //       </View>
    //     );
    // }

    return (
        <View>
            <TouchableOpacity className='mt-8 mb-4' onPress={goBack}>
                <GoBackButton />
            </TouchableOpacity>
            <SearchTextInputBar />
            <View className='w-full items-center justify-center mt-4'>
                <CustomText
                size={24}
                weight='bold'
                className='text-white items-center justify-center'>
                    {categoryTitle}
                </CustomText>
            <Divider text='Com base na categoria' ></Divider>
            </View>
            <BasicPointCard
                pointName="Cataratas do Iguacu"
                id={2}
                averageRating={2}
                averageValue={200}
                imageCover="https://plus.unsplash.com/premium_photo-1697729979889-31ec7ecf6f06?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />            
        </View>    
    )
}