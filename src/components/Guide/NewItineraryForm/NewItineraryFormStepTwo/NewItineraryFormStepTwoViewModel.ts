import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { useCreateItineraryMutation } from 'src/common/hooks/mutations/useCreateItineraryMutation';
import { useUploadItineraryCoverMutation } from 'src/common/hooks/mutations/useUploadItineraryCoverMutation';
import NewItineraryStepTwoFormSchema from 'src/common/schemas/NewItinerary/NewItineraryStepTwoSchema';
import { useNewItineraryFormStore } from 'src/common/stores/NewItineraryFormStore';

import { NewItineraryStepTwoFormData } from './NewItineraryFormStepTwo.types';

import { useAppRouter } from '~/src/common/lib/router';

export const useNewItineraryFormStepTwoViewModel = () => {
  const methods = useForm<NewItineraryStepTwoFormData>({
    resolver: zodResolver(NewItineraryStepTwoFormSchema),
    defaultValues: {
      interestPointIds: [],
    },
  });
  const queryClient = useQueryClient();

  const interestPointIds = methods.watch('interestPointIds');
  const { dismiss, goBack } = useAppRouter();
  const { mutate: createItinerary, isPending } = useCreateItineraryMutation();
  const { mutate: uploadItineraryCover } = useUploadItineraryCoverMutation();
  const formError = methods.formState.errors.interestPointIds;

  const { setFormMethods, clearFormMethods, stepOneData } = useNewItineraryFormStore();

  useEffect(() => {
    setFormMethods(methods);
    return () => clearFormMethods();
  }, []);

  useEffect(() => {
    if (formError) {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Selecione ao menos um ponto de interesse!',
      });
    }
  }, [formError]);

  const onPressCreate = async (values: NewItineraryStepTwoFormData) => {
    if (!stepOneData) {
      return;
    }

    createItinerary(
      { ...stepOneData, interestPointsId: values.interestPointIds },
      {
        onSuccess: (data) => {
          uploadItineraryCover(
            { itineraryId: data.id, uri: stepOneData.imgCover },
            {
              onSuccess: () => {
                Toast.show({
                  type: 'success',
                  text1: 'Sucesso!',
                  text2: 'Roteiro criado com sucesso!',
                });
                queryClient.invalidateQueries({ queryKey: ['guide-itineraries'] });
                dismiss(1);
                goBack();
              },
              onError: () => {
                Toast.show({
                  type: 'error',
                  text1: 'Erro!',
                  text2: 'Ocorreu um erro com a imagem de capa!',
                });
                dismiss(1);
                goBack();
              },
            }
          );
        },
        onError: () => {
          Toast.show({
            type: 'error',
            text1: 'Erro!',
            text2: 'Ocorreu um erro com a criação do seu roteiro!',
          });
          dismiss(1);
          goBack();
        },
      }
    );
  };

  return {
    handleSubmit: methods.handleSubmit,
    onPressCreate,
    interestPointIds,
    isPending,
  };
};
