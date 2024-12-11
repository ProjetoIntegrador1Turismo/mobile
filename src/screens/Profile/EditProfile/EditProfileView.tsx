import { View, Text } from 'react-native';

import { EditProfileForm } from '~/src/components/Auth/EditProfileForm/EditProfileForm';
import { AuthFormHeader } from 'src/components/Auth/AuthFormHeader/AuthFormHeader';
import { FormContainer } from 'src/components/Auth/FormContainer/FormContainer';
import { LoginForm } from 'src/components/Auth/LoginForm/LoginForm';
import TLLogoWhite from 'src/components/Auth/TLLogoWhite/TLLogoWhite';
import { GoBackButton } from 'src/components/Button/GoBackButton/GoBackButton';
export function EditProfileView() {
  return (
    <FormContainer className='items-center bg-tl-bg'>
      <View className='mt-14 flex w-11/12 gap-6'>
        <GoBackButton />
        <AuthFormHeader title='Editar dados' label='Edite os dados que desejar!' />
      </View>
      <View className='mb-3 mt-14'>
        <EditProfileForm />
      </View>
      <View className='mt-[50px] '>
        <TLLogoWhite className='h-[100px] w-[150px] object-cover' />
      </View>
    </FormContainer>
  );
}
