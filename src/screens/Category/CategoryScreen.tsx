import { View } from "react-native";
import { CategoryCardList } from "~/src/components/CategoryCardList/CategoryCardList";
import { SearchTextInputBar } from "~/src/components/SearchTextInputBar/SearchTextInputBar";


export default function CategoryScreen(){
    return (
        <View>
        <SearchTextInputBar/>
        <CategoryCardList />
        </View>
    )
}