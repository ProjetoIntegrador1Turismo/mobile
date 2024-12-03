import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useAppRouter } from 'src/common/lib/router';
import RegisterStepOneSchema from 'src/common/schemas/Register/RegisterStepOneSchema';
import { RegisterFormStepOneFormData } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOne.types';

export const useRegisterFormStepOneViewModel = () => {
  const { push, dismiss } = useAppRouter();

  const { control, handleSubmit, watch } = useForm<RegisterFormStepOneFormData>({
    resolver: zodResolver(RegisterStepOneSchema),
    shouldUnregister: true,
    defaultValues: {
      isGuide: false,
    },
  });

  const isGuide = watch('isGuide');

  const onPressContinue = (data: RegisterFormStepOneFormData) => {
    if (data.isGuide) {
      dismiss();
      push(`/(auth)/register2?name=${data.name}&phone=${data.phone}&cadastur=${data.cadastur}`);
      return;
    }

    dismiss();
    push(`/(auth)/register2?name=${data.name}&phone=${data.phone}`);
  };

  return { control, onPressContinue, handleSubmit, isGuide };
};
