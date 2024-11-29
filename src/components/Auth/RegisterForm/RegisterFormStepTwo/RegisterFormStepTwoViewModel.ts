import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { useAppRouter } from 'src/common/lib/router';
import RegisterStepTwoSchema from 'src/common/schemas/Register/RegisterStepTwoSchema';
import {
  RegisterFormStepTwoViewModelParams,
  RegisterStepTwoFormData,
} from 'src/components/Auth/RegisterForm/RegisterFormStepTwo/RegisterFormStepTwo.types';

import { useRegisterMutation } from '~/src/common/hooks/mutations/useRegisterMutation';
import { nameSplit } from '~/src/common/utils/nameSplit';

export const useRegisterFormStepTwoViewModel = ({
  StepOneData,
}: RegisterFormStepTwoViewModelParams) => {
  const { goBack } = useAppRouter();
  const { mutate, isPending } = useRegisterMutation();

  const { control, handleSubmit } = useForm<RegisterStepTwoFormData>({
    resolver: zodResolver(RegisterStepTwoSchema),
  });

  const onPressContinue = (data: RegisterStepTwoFormData) => {
    const { name, phone, cadastur } = StepOneData;

    const { firstName, lastName } = nameSplit(name);

    mutate(
      {
        firstName,
        lastName,
        cadasturCode: cadastur,
        phone,
        ...data,
      },
      {
        onSuccess: () => {
          goBack();
          // replace('/(auth)/login');
        },
        onError: () => {
          Alert.alert('Erro ao criar conta!');
        },
      }
    );
  };

  return { control, onPressContinue, handleSubmit, isPending };
};
