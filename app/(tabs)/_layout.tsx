import { Tabs } from 'expo-router';
import { TabBar } from 'src/components/TabBar/TabBar';

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />} initialRouteName='(home)'>
      <Tabs.Screen name='(home)' options={{ title: 'Home', headerShown: false }} />
      <Tabs.Screen name='(search)' options={{ title: 'Pesquisar', headerShown: false }} />
      <Tabs.Screen name='(dynamic)' options={{ title: 'Meus roteiros', headerShown: false }} />
      <Tabs.Screen name='(profile)' options={{ title: 'Perfil', headerShown: false }} />
      <Tabs.Screen redirect name='index' />
    </Tabs>
  );
}
