import { zodResolver } from '@hookform/resolvers/zod';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import EditItineraryStepOneFormSchema from 'src/common/schemas/EditItinerary/EditItinerarySchemaStepOne';

import { EditItineraryStepOneFormData } from './EditItineraryFormStepOne.types';

import { useItineraryByIdQuery } from '~/src/common/hooks/queries/useGetItineraryByIdQuery';
import { useAppRouter } from '~/src/common/lib/router';
import { BASE_URL } from '~/src/common/repositories/client';
import { useEditItineraryFormStore } from '~/src/common/stores/EditItineraryStore';

export const useEditItineraryFormStepOneViewModel = (itineraryId: number) => {
  const [uri, setUri] = useState<string>('');
  const { push } = useAppRouter();
  const { setStepOneData, setInterestPointIds } = useEditItineraryFormStore();
  const { data, isLoading } = useItineraryByIdQuery(itineraryId);

  const { control, handleSubmit, formState, setValue, reset } =
    useForm<EditItineraryStepOneFormData>({
      resolver: zodResolver(EditItineraryStepOneFormSchema),
      defaultValues: {
        id: 0,
        averageCost: '',
        days: '',
        description: '',
        title: '',
      },
    });

  useEffect(() => {
    if (data) {
      reset({
        id: data.id,
        averageCost: String(data.mediumCost),
        days: String(data.days),
        description: data.description,
        title: data.title,
        imgCover: data.imageCoverUrl,
      });
      setInterestPointIds(data.interestPoints.map((point) => point.id));
      setUri(BASE_URL + data.imageCoverUrl);
    }
  }, [data, reset]);

  const onPressAddCoverImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUri(result.assets[0].uri);
      setValue('imgCover', result.assets[0].uri);
    }
  };

  const coverError = formState.errors.imgCover?.message;

  const onPressContinue = (values: EditItineraryStepOneFormData) => {
    setStepOneData(values);
    push('(tabs)/(dynamic)/edit-itinerary-part-two');
  };

  return {
    control,
    handleSubmit,
    onPressContinue,
    onPressAddCoverImage,
    uri,
    coverError,
    isLoading,
  };
};
