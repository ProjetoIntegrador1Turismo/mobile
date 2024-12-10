import { View } from 'react-native';
import { AuthFormHeader } from 'src/components/Auth/AuthFormHeader/AuthFormHeader';
import { FormContainer } from 'src/components/Auth/FormContainer/FormContainer';
import { RecoveryForm } from 'src/components/Auth/RecoveryForm/RecoveryForm';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';

export function RecoveryView() {
  return (
    <FormContainer className='items-center bg-tl-bg'>
      <View className='mt-14 flex w-11/12 gap-6'>
        <GoBackButton />
        <AuthFormHeader title='Perdeu a senha?' label='Insira seu e-mail para recuperar.' />
      </View>
      <View className='mb-3 mt-20'>
        <RecoveryForm />
      </View>
      <View className='mt-[220px] '>
        <TLLogoWhite className='h-[100px] w-[150px] object-cover' />
      </View>
    </FormContainer>
  );
}
