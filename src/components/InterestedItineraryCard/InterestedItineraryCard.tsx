import { Image, TouchableOpacity, View } from "react-native";
import { Avatar } from "../Avatar/Avatar";
import { CustomText } from "../Text/CustomText";
import { BASE_URL } from "~/src/common/repositories/client";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import { truncatedName } from '~/src/components/InterestedItineraryCard/InterestItineraryCardViewModel'


export function InterestedItineraryCard() {
    return (
        <View className="w-[360px] h-[160px] rounded-md flex items-center rounded-2xl mt-[13px]">
            <Image
                      source={{ uri: BASE_URL + "/uploads/cataratas-do-iguaçu-16.png" }}
                      className='h-full w-full opacity-45 rounded-2xl'
                      resizeMode='cover'
                    />
            <View className="absolute items-center">
                <View className="flex-row items-center justify-center w-auto h-auto mt-4">
                    <Avatar imageUrl="/uploads/userplaceholder.png" />
                    <View className="flex-row ">
                        <CustomText className="text-white ml-2">Guia: </CustomText>
                        <CustomText className="text-white" weight="bold"> 
                        {truncatedName("Anderson Martins", 18)}
                        </CustomText>
                    </View>
                </View>
                <CustomText className="text-white" size={24} weight="bold">
                    {truncatedName("Romance nas Cataratas", 21)}
                </CustomText>
                <View className="flex-row">
                    <TouchableOpacity>
                        <EvilIcons className="mr-12" name='external-link' size={45} color='#3371E3'/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="trash-2" size={32} color="#E22929" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}