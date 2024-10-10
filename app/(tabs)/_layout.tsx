import { Tabs } from 'expo-router';
import { View } from 'react-native';

import { UserRound, HomeIcon, Search, Heart } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#D5036D',
        tabBarBackground: () => <View className='bg-tab-bg' />,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='categories'
        options={{
          title: 'Pesquisar',
          headerShown: false,
          tabBarIcon: ({ color }) => <Search color={color} />,
        }}
      />
      <Tabs.Screen
        name='dynamic'
        options={{
          title: 'Meus roteiros',
          headerShown: false,
          tabBarIcon: ({ color }) => <Heart color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Perfil',
          headerShown: false,
          tabBarIcon: ({ color }) => <UserRound color={color} />,
        }}
      />
    </Tabs>
  );
}
