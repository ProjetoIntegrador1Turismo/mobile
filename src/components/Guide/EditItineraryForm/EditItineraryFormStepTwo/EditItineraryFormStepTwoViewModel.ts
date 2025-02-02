import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { useCreateItineraryMutation } from 'src/common/hooks/mutations/useCreateItineraryMutation';
import { useUploadItineraryCoverMutation } from 'src/common/hooks/mutations/useUploadItineraryCoverMutation';
import NewItineraryStepTwoFormSchema from 'src/common/schemas/NewItinerary/NewItineraryStepTwoSchema';
import { useNewItineraryFormStore } from 'src/common/stores/NewItineraryFormStore';

import { EditItineraryStepTwoFormData } from './EditItineraryFormStepTwo.types';

import { useEditItineraryMutation } from '~/src/common/hooks/mutations/useEditItineraryMutation';
import { useAppRouter } from '~/src/common/lib/router';
import EditItineraryStepTwoFormSchema from '~/src/common/schemas/EditItinerary/EditItinerarySchemaStepTwo';
import { useEditItineraryFormStore } from '~/src/common/stores/EditItineraryStore';

export const useEditItineraryFormStepTwoViewModel = () => {
  const {
    setFormMethods,
    clearFormMethods,
    stepOneData,
    interestPointIds: interestPointIdsData,
  } = useEditItineraryFormStore();

  const methods = useForm<EditItineraryStepTwoFormData>({
    resolver: zodResolver(EditItineraryStepTwoFormSchema),
    defaultValues: {
      interestPointIds: interestPointIdsData ?? [],
    },
  });

  const queryClient = useQueryClient();
  const interestPointIds = methods.watch('interestPointIds');
  const { dismiss, goBack } = useAppRouter();
  const { mutate: editItinerary, isPending } = useEditItineraryMutation();
  const { mutate: uploadItineraryCover } = useUploadItineraryCoverMutation();
  const formError = methods.formState.errors.interestPointIds;

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

  const removeInterestPoint = (id: number) => {
    methods.setValue(
      'interestPointIds',
      interestPointIds.filter((interestPointId) => interestPointId !== id)
    );
  };

  const onPressCreate = async (values: EditItineraryStepTwoFormData) => {
    if (!stepOneData) {
      return;
    }

    editItinerary(
      { ...stepOneData, interestPointsId: values.interestPointIds },
      {
        onSuccess: () => {
          if (!stepOneData.imgCover.includes('uploads')) {
            uploadItineraryCover(
              { itineraryId: stepOneData.id, uri: stepOneData.imgCover },
              {
                onSuccess: () => {
                  Toast.show({
                    type: 'success',
                    text1: 'Sucesso!',
                    text2: 'Roteiro atualizado com sucesso!',
                  });
                  queryClient.invalidateQueries({ queryKey: ['guide-itineraries'] });
                  queryClient.invalidateQueries({ queryKey: ['itinerary-by-id', stepOneData.id] });
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
            return;
          }

          Toast.show({
            type: 'success',
            text1: 'Sucesso!',
            text2: 'Roteiro atualizado com sucesso!',
          });
          queryClient.invalidateQueries({ queryKey: ['guide-itineraries'] });
          queryClient.invalidateQueries({ queryKey: ['itinerary-by-id', stepOneData.id] });
          dismiss(1);
          goBack();
        },
        onError: () => {
          Toast.show({
            type: 'error',
            text1: 'Erro!',
            text2: 'Ocorreu um erro com a edição do seu roteiro!',
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
    removeInterestPoint,
  };
};
