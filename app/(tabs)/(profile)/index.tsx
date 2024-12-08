import { useAppRouter } from 'src/common/lib/router';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { SolidButton } from 'src/components/Button/SolidButton/SolidButton';
import { Container } from 'src/components/Container/Container';
import { CustomText } from 'src/components/Text/CustomText';

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
      </Container>
    );
  }

  return (
    <Container className='items-center justify-center bg-tl-bg'>
      <CustomText className='text-white'>Voce esta autenticado!</CustomText>
    </Container>
  );
}
