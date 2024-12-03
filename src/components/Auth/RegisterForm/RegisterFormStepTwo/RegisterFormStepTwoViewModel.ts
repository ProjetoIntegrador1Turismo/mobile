import { zodResolver } from '@hookform/resolvers/zod';
import * as Haptics from 'expo-haptics';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { useRegisterMutation } from 'src/common/hooks/mutations/useRegisterMutation';
import { useAppRouter } from 'src/common/lib/router';
import RegisterStepTwoSchema from 'src/common/schemas/Register/RegisterStepTwoSchema';
import { nameSplit } from 'src/common/utils/nameSplit';
import {
  RegisterFormStepTwoViewModelParams,
  RegisterStepTwoFormData,
} from 'src/components/Auth/RegisterForm/RegisterFormStepTwo/RegisterFormStepTwo.types';

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
          Toast.show({
            type: 'success',
            text1: 'Sucesso!',
            text2: 'Sua conta foi criada com sucesso!!',
          });
          // replace('/(auth)/login');
        },
        onError: () => {
          Toast.show({
            type: 'error',
            text1: 'Erro!',
            text2: 'Não foi possivel criar sua conta!',
          });
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        },
      }
    );
  };

  return { control, onPressContinue, handleSubmit, isPending };
};
