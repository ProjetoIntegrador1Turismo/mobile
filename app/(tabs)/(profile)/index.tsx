import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { useAppRouter } from '~/src/common/lib/router';
import { useAuthStore } from '~/src/common/stores/AuthStore';
import { SolidButton } from '~/src/components/Button/SolidButton/SolidButton';
import { Container } from '~/src/components/Container/Container';
import LoginView from '~/src/screens/Login/LoginView';

export default function Profile() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { push } = useAppRouter();

  if (!isAuthenticated) {
    return (
      <Container className='items-center justify-center'>
        <SolidButton onPress={() => push('/(auth)/login')} title='Login' color='black' />
      </Container>
    );
  }

  return <LoginView />;
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
  },
});
