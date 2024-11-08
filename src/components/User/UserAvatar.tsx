import { Image, Text, View } from 'react-native';
import { UserAvatarProps } from '~/src/components/User/UserAvatar.types';


export function UserAvatar({userName, imgSource}: UserAvatarProps){
    return (
    <View className='border-2 flex flex-row overflow-hidden'>
        <View className='border-2  w-[41px] h-[41px] m-[5px] rounded-[20.5px]'>
            <Image
                src={imgSource}
            />
        </View>
        <Text className='align-middle'>{userName}</Text>
    </View>
    )
}