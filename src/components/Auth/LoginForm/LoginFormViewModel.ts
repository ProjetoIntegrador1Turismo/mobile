import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { useAppRouter } from 'src/common/lib/router';
import LoginSchema from 'src/common/schemas/Login/LoginSchema';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { LoginFormData } from 'src/components/Auth/LoginForm/LoginForm.types';

export const useLoginFormViewModel = () => {
  const [isLoading, startTransition] = useTransition();
  const { replace, push } = useAppRouter();

  const { login, isAuthenticated } = useAuthStore();

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
  };

  const onPressRegister = () => {
    push('/(auth)/register');
  };

  useEffect(() => {
    if (isAuthenticated) {
      replace('/(home)/');
    }
  }, [isAuthenticated]);

  return { control, onPressLogin, handleSubmit, isLoading, onPressRegister };
};
