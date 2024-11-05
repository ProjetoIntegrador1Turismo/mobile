import { Pressable, SafeAreaView } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { CustomText } from 'src/components/Text/CustomText';

import { Login } from '~/src/common/repositories/auth/auth.repository';

export default function Home() {
  const { push } = useAppRouter();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handlePress = async () => {
    await logout();
  };

  return (
    <SafeAreaView className='flex-1 items-center justify-center p-8'>
      <CustomText>Home</CustomText>
      <Pressable onPress={handlePress} className='rounded-lg border border-black p-3'>
        <CustomText>Logout</CustomText>
      </Pressable>
      <CustomText className='max-h-[250px] overflow-hidden'>
        {JSON.stringify(user, null, 2)}
      </CustomText>
    </SafeAreaView>
  );
}
