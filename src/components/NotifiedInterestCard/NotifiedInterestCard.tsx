import { TouchableOpacity, View } from 'react-native';
import { NotifiedInterestCardProps } from '~/src/components/NotifiedInterestCard/NotifiedInterestCard.types';
import { UserAvatar } from '../User/UserAvatar';
import { CustomText } from '../Text/CustomText';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import { handleOnPressItineraryRef } from '~/src/components/NotifiedInterestCard/NotifiedInterestCardViewModel';

export function NotifiedInterestCard({ userName, imageUrl, email, itineraryTitle, phone }: NotifiedInterestCardProps){
    return (
        <View className='border-2 w-[300px] h-[185px] bg-black rounded-[9px]'>
            <View className='ml-[15px] mt-[11px]'>
                <UserAvatar userName={userName} imageUrl={imageUrl} />
            </View>
            <View className='ml-[22px] mt-[11px]'>
                <CustomText className='text-white' weight='bold' size={12}>Telefone:  
                    <CustomText size={12}> {phone}</CustomText>
                </CustomText>
                <CustomText className='text-white' weight='bold' size={12}>Email:
                <CustomText size={12}> {email}</CustomText>
                </CustomText>
                <CustomText className='text-white' weight='bold' size={12}>Roteiro:</CustomText>                
                <TouchableOpacity className='flex flex-row items-center'
                onPress={() => handleOnPressItineraryRef(1)}
                >
                    <CustomText className='text-white' size={16}>{itineraryTitle}</CustomText>
                    <EvilIcons name="external-link" size={30} color='#3371E3'/>
                </TouchableOpacity>                
            </View>
        </View>
    )
}