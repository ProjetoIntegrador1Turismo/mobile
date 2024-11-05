import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import LoginSchema from 'src/common/schemas/Login/LoginSchema';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { LoginFormData } from 'src/components/Auth/LoginForm/LoginForm.types';
import { useAppRouter } from '~/src/common/lib/router';

export const useLoginFormViewModel = () => {
  const [isLoading, startTransition] = useTransition();
  const { replace } = useAppRouter();

  const login = useAuthStore().login;

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLoginAction = async (data: LoginFormData) => {
    await login(data);
  };

  const onPressLogin = (data: LoginFormData) => {
    startTransition(() => {
      handleLoginAction(data);
    });
    // login(data);
    console.log(data);
    // if (error) {
    //   //do smthing
    // }
    replace('/(home)/')
  };

  return { control, onPressLogin, handleSubmit, isLoading };
};
