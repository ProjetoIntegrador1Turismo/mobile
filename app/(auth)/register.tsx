import { Link, useNavigation } from 'expo-router';
import { Text, SafeAreaView, Pressable } from 'react-native';

export default function Register() {
  const navigator = useNavigation();

  const handleGoBack = () => {
    navigator.goBack();
  };

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Text className='text-3xl text-white'>register 1</Text>
      <Pressable onPress={handleGoBack}>
        <Text>Voltar</Text>
      </Pressable>
      <Link
        href={{
          pathname: '/(auth)/register2',
          params: { email: 'btprates2004@gmail.com', phone: '45998105609' },
        }}
        asChild>
        <Pressable className='border border-black p-3 text-white'>
          <Text>continuar</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
