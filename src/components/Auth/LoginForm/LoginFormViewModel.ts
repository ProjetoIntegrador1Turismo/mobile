import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppRouter } from 'src/common/lib/router';
import LoginSchema from 'src/common/schemas/Login/LoginSchema';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { LoginFormData } from 'src/components/Auth/LoginForm/LoginForm.types';

export const useLoginFormViewModel = () => {
  const [isLoading, setisLoading] = useState<boolean>();
  const { replace, push } = useAppRouter();

  const { login, isAuthenticated } = useAuthStore();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onPressLogin = async (data: LoginFormData) => {
    setisLoading(true);
    await login(data);
    setisLoading(false);
  };

  const onPressForgotPassword = () => {
    push('/(auth)/recovery');
  };

  const onPressRegister = () => {
    push('/(auth)/register');
  };

  useEffect(() => {
    if (isAuthenticated) {
      replace('/(home)/');
    }
  }, [isAuthenticated]);

  return { control, onPressLogin, handleSubmit, isLoading, onPressRegister, onPressForgotPassword };
};
