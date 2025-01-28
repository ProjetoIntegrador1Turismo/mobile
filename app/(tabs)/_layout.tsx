import { Tabs } from 'expo-router';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { TabBar } from 'src/components/TabBar/TabBar';

export default function TabLayout() {
  const user = useAuthStore((state) => state.user);
  const isGuide = user?.userType === 'Guide';

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />} initialRouteName='(home)'>
      <Tabs.Screen name='(home)' options={{ title: 'Home', headerShown: false }} />
      <Tabs.Screen name='(search)' options={{ title: 'Pesquisar', headerShown: false }} />
      <Tabs.Screen
        name='(dynamic)'
        options={{
          title: isGuide ? 'Painel do Guia' : 'Meus roteiros',
          headerShown: false,
        }}
      />
      <Tabs.Screen name='(profile)' options={{ title: 'Perfil', headerShown: false }} />
      <Tabs.Screen redirect name='index' />
    </Tabs>
  );
}
