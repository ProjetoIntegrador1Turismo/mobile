import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, Pressable, SafeAreaView } from 'react-native';

export default function Register2() {
  const { email, phone } = useLocalSearchParams();

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Text className='text-3xl text-white'>register 2</Text>
      <Pressable
        className='border border-black p-3'
        onPress={() => {
          console.log(email, phone);
        }}>
        <Text>continuar</Text>
      </Pressable>
    </SafeAreaView>
  );
}
