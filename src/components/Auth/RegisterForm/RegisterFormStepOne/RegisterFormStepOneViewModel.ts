import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useAppRouter } from 'src/common/lib/router';
import RegisterStepOneSchema from 'src/common/schemas/Register/RegisterStepOneSchema';
import { RegisterStepOneFormData } from 'src/components/Auth/RegisterForm/RegisterFormStepOne/RegisterFormStepOne.types';

export const useRegisterStepOneViewModel = () => {
  const { push } = useAppRouter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterStepOneFormData>({
    resolver: zodResolver(RegisterStepOneSchema),
    shouldUnregister: true,
    defaultValues: {
      isGuide: false,
    },
  });

  const onPressContinue = ({ name, phone }: RegisterStepOneFormData) => {
    push(`/(auth)/register2?name=${name}&phone=${phone}`);
  };

  return { control, onPressContinue, handleSubmit, watch, errors };
};
