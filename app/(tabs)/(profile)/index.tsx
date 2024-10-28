import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { useAuthStore } from '~/src/common/stores/AuthStore';
import LoginView from '~/src/screens/Login/LoginView';

export default function Profile() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // if (!isAuthenticated) {
  //   return <LoginView />;
  // }

  return <LoginView />;
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
  },
});
