import { Link } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';

export default function LoginView() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Text className='text-3xl text-white'>login</Text>
      <Link
        href={{
          pathname: '/(auth)/register',
        }}
        asChild>
        <Pressable className='border border-black p-3'>
          <Text>registro</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
