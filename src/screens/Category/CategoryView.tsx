import { View } from "react-native";
import { CategoryCardList } from "~/src/components/CategoryCardList/CategoryCardList";
import { SearchTextInputBar } from "~/src/components/SearchTextInputBar/SearchTextInputBar";


export default function CategoryView(){
    return (
        <View className='mt-[60px]'>
        <SearchTextInputBar/>
        <CategoryCardList />
        </View>
    )
}