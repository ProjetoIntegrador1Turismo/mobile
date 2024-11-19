import { TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CustomText } from '~/src/components/Text/CustomText';
import { BasicPointCardProps } from '~/src/components/Point/BasicPoint/BasicPointCard.types'


export function BasicPointCard({pointName, onPress }:BasicPointCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View className='h-[71px] border-2 w-[100%] rounded-2xl overflow-hidden flex-row items-center px-4'>
                <CustomText
                className='flex-1 text-left text-white'
                weight='bold'
                size={20}
                >Hotel das Cataratas</CustomText>
                <AntDesign name='arrowright' size={30} color='white' />
            </View>
        </TouchableOpacity>
    );
}
