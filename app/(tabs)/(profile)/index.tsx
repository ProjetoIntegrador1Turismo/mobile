import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

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
      <Container className='items-center justify-center gap-3'>
        <SolidButton
          onPress={() => push('/(auth)/login')}
          title='Login'
          color='black'
          className='rounded-lg border border-black px-2'
        />
        <SolidButton
          onPress={() => push('/(auth)/register2')}
          title='Go to register2'
          color='black'
          className='rounded-lg border border-black px-3'
        />
      </Container>
    );
  }

  return (
    <Container className='items-center justify-center'>
      <Text>Voce esta autenticado!</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
  },
});
