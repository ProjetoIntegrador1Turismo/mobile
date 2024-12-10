import { View } from 'react-native';
import { UserAvatarProps } from '~/src/components/User/UserAvatar.types';
import { Avatar } from '~/src/components/Avatar/Avatar';
import { truncatedUserName } from '~/src/components/User/UserAvatarViewModel';
import { CustomText } from '~/src/components/Text/CustomText';

export function UserAvatar({ userName, imageUrl, maxUserNameLength = 19 }: UserAvatarProps) {
  return (
    <View className='flex h-[45px] flex-row items-center'>
      <Avatar imageUrl={imageUrl} />
      <CustomText className='ml-[7px] text-white'>
        {truncatedUserName(userName, maxUserNameLength)}
      </CustomText>
    </View>
  );
}
