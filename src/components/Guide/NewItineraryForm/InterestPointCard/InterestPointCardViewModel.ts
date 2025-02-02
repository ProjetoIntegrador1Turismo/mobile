import { goBack } from 'expo-router/build/global-state/routing';
import Toast from 'react-native-toast-message';

import { useAppRouter } from '~/src/common/lib/router';
import { useNewItineraryFormStore } from '~/src/common/stores/NewItineraryFormStore';

export const useInterestPointCardViewModel = () => {
  const { formMethods } = useNewItineraryFormStore();
  const { dismiss, goBack } = useAppRouter();

  const handleOnPressCard = (interestPointId: number) => {
    if (formMethods) {
      if (formMethods.getValues().interestPointIds.includes(interestPointId)) {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Este ponto de interesse já foi adicionado ao roteiro',
        });
        dismiss(1);
        goBack();
        return;
      }
      formMethods.setValue('interestPointIds', [
        ...formMethods.getValues().interestPointIds,
        interestPointId,
      ]);
      dismiss(1);
      goBack();
    }
  };

  return { handleOnPressCard };
};
