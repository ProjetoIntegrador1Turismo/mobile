import { View } from 'react-native';
import { NotifiedInterestCardProps } from '~/src/components/NotifiedInterestCard/NotifiedInterestCard.types';
import { UserAvatar } from '../User/UserAvatar';
import { CustomText } from '../Text/CustomText';



export function NotifiedInterestCard({ userName, imageUrl, email, itineraryTitle, phone }: NotifiedInterestCardProps){
    return (
        <View className='border-2 w-[300px] h-[185px] bg-black rounded-[9px]'>
            <View className='ml-[15px] mt-[11px]'>
                <UserAvatar userName={userName} imageUrl={imageUrl} />
            </View>
            <View className='ml-[22px] mt-[11px]'>
                <CustomText className='text-white' weight='bold' size={12}>Telefone:  
                    <CustomText size={12}>{phone}</CustomText>
                </CustomText>
                <CustomText className='text-white' weight='bold' size={12}>Email:
                <CustomText size={12}>{email}</CustomText>
                </CustomText>
                <CustomText className='text-white' weight='bold' size={12}>Roteiro:</CustomText>
                <CustomText className='text-white' size={16}>{itineraryTitle}</CustomText>
            </View>
        </View>
    )
}