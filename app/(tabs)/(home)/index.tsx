import { Pressable, SafeAreaView, Alert } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { CustomText } from 'src/components/Text/CustomText';

import { getObject } from '~/src/common/lib/storage';
import { Login } from '~/src/common/repositories/auth/auth.repository';

export default function Home() {
  const { push } = useAppRouter();
  const user = useAuthStore((state) => state.user);
  const { logout, error } = useAuthStore();

  const handlePress = async () => {
    await logout();
  };

  const handleStoragePress = async () => {
    const data = await getObject('user');
    Alert.alert(JSON.stringify(data));
  };

  return (
    <SafeAreaView className='flex-1 items-center justify-center p-8'>
      <CustomText>Home</CustomText>
      <Pressable onPress={handlePress} className='rounded-lg border border-black p-3'>
        <CustomText>Logout</CustomText>
      </Pressable>
      <Pressable onPress={handleStoragePress} className='rounded-lg border border-black p-3'>
        <CustomText>Get from storage</CustomText>
      </Pressable>
      <CustomText className='max-h-[250px] overflow-hidden'>
        {JSON.stringify(user, null, 2)}
      </CustomText>
      <CustomText>{JSON.stringify(error, null, 2)}</CustomText>
    </SafeAreaView>
  );
}
