import { zodResolver } from '@hookform/resolvers/zod';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import NewItineraryStepOneFormSchema from 'src/common/schemas/NewItinerary/NewItineraryStepOneSchema';

import { NewItineraryStepOneFormData } from './NewItineraryFormStepOne.types';

import { useAppRouter } from '~/src/common/lib/router';
import { useNewItineraryFormStore } from '~/src/common/stores/NewItineraryFormStore';

export const useNewItineraryFormStepOneViewModel = () => {
  const [uri, setUri] = useState<string>('');
  const { push } = useAppRouter();
  const { setStepOneData } = useNewItineraryFormStore();

  const { control, handleSubmit, formState, setValue } = useForm<NewItineraryStepOneFormData>({
    resolver: zodResolver(NewItineraryStepOneFormSchema),
  });

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

  const onPressContinue = (values: NewItineraryStepOneFormData) => {
    setStepOneData(values);
    push('(tabs)/(dynamic)/create-itinerary-part-two');
  };

  return { control, handleSubmit, onPressContinue, onPressAddCoverImage, uri, coverError };
};
