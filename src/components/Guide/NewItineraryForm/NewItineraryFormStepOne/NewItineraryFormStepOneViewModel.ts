import { zodResolver } from '@hookform/resolvers/zod';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import NewItineraryStepOneFormSchema from 'src/common/schemas/NewItinerary/NewItineraryStepOneSchema';

import { NewItineraryStepOneFormData } from './NewItineraryFormStepOne.types';

export const useNewItineraryFormStepOneViewModel = () => {
  const [uri, setUri] = useState<string>('');

  const { control, handleSubmit } = useForm<NewItineraryStepOneFormData>({
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
    }
  };

  const onPressContinue = (values: NewItineraryStepOneFormData) => {
    console.log(values);
  };

  return { control, handleSubmit, onPressContinue, onPressAddCoverImage, uri };
};
