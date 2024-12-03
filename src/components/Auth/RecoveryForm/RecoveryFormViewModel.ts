import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { useRecoveryMutation } from 'src/common/hooks/mutations/useRecoveryMutation';
import { useAppRouter } from 'src/common/lib/router';
import RecoverySchema from 'src/common/schemas/Recovery/RecoverySchema';
import { RecoveryFormData } from 'src/components/Auth/RecoveryForm/RecoveryForm.types';

export const useRecoveryFormViewModel = () => {
  const { push, dismiss } = useAppRouter();
  const { mutate, isPending } = useRecoveryMutation();

  const { control, handleSubmit } = useForm<RecoveryFormData>({
    resolver: zodResolver(RecoverySchema),
  });

  const onPressRecoverPassword = (data: RecoveryFormData) => {
    mutate(
      {
        email: data.email,
      },
      {
        onSuccess: () => {
          dismiss();
          push('/(auth)/recoverysucess');
        },
        onError: () => {
          Toast.show({
            type: 'error',
            text1: 'Erro!',
            text2: 'Não foi possivel encontrar usa conta!',
          });
        },
      }
    );
  };

  return { control, handleSubmit, onPressRecoverPassword, isPending };
};
