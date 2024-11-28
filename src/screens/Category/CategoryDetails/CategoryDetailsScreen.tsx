import { Divider } from "~/src/components/Divider/Divider";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import { CustomText } from "~/src/components/Text/CustomText";
import AntDesign from '@expo/vector-icons/AntDesign';
import { SearchTextInputBar } from "~/src/components/SearchTextInputBar/SearchTextInputBar";
import { useAppRouter } from 'src/common/lib/router';
import { useCategoryDetailsScreenViewModel } from "./CategoryDetailsScreenViewModel";
import { BasicPointCard } from "~/src/components/Point/BasicPoint/BasicPointCard";
import { GoBackButton } from "~/src/components/Button/GoBackButton/GoBackButton";
import BasicPointCardList from "~/src/components/Point/BasicPointCardList";

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
            {/* <BasicPointCard
                pointName="Cataratas do Iguacu"
                id={2}
                averageRating={2}
                averageValue={200}
                imageCover="https://picsum.photos/600/400"
            />             */}
            <BasicPointCardList />
        </View>    
    )
}