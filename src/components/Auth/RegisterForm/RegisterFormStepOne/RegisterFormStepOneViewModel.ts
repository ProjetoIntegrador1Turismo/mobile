import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import RegisterStepOneSchema from 'src/common/schemas/Register/RegisterStepOneSchema';
import { RegisterStepOneFormData } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOne.types';

export const useRegisterStepOneViewModel = () => {
  const { push } = useAppRouter();

  const { control, handleSubmit, watch } = useForm<RegisterStepOneFormData>({
    resolver: zodResolver(RegisterStepOneSchema),
    shouldUnregister: true,
    defaultValues: {
      isGuide: false,
    },
  });

  const isGuide = watch('isGuide');

  const onPressContinue = (data: RegisterStepOneFormData) => {
    push(`/(auth)/register2?name=${data.name}&phone=${data.phone}`);
  };

  return { control, onPressContinue, handleSubmit, isGuide };
};
