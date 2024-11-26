import { TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CustomText } from '~/src/components/Text/CustomText';
import { BasicPointCardProps } from '~/src/components/Point/BasicPoint/BasicPointCard.types'
import Entypo from '@expo/vector-icons/Entypo';
import { truncatedPointName } from '~/src/components/Point/BasicPoint/BasicPointCardViewModel'
import { AverageValue } from '~/src/components/Price/AverageValue/AverageValue';


export function BasicPointCard({pointName, maxPointNameLength = 22, averageRating, averageValue, onPress }:BasicPointCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>            
            <View className='border-2 h-[85px] w-[100%] rounded-2xl flex-row border-white justify-between'>
                <View className='ml-[10px]'>
                    <CustomText
                        className='text-white mt-[5px]'  
                        weight='bold'
                        size={20}
                        >{truncatedPointName(pointName, maxPointNameLength)}
                    </CustomText>
                    <View className='flex-row'>
                        <Entypo name="star" size={16} color='white'/>
                        <View>
                            <CustomText className='text-white mt-[-3px]' size={16} weight='light'>
                                {averageRating}
                            </CustomText>
                        </View>
                        <View className='flex-row ml-[20px] mt-[1px]'>
                            <AntDesign name="right" size={16} color='white' />
                            <AverageValue value={averageValue} />
                        </View>
                    </View>
                </View>
                <View className='items-center justify-center mr-[4px]'>
                    <AntDesign name='arrowright' size={30} color='white' />
                </View>
            </View>
        </TouchableOpacity>
    );
}
