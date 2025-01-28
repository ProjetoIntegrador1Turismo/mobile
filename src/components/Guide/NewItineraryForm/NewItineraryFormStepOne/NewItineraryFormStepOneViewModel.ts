import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import NewItineraryStepOneFormSchema from 'src/common/schemas/NewItinerary/NewItineraryStepOneSchema';

import { NewItineraryStepOneFormData } from './NewItineraryFormStepOne.types';

export const useNewItineraryFormStepOneViewModel = () => {
  const { control, handleSubmit } = useForm<NewItineraryStepOneFormData>({
    resolver: zodResolver(NewItineraryStepOneFormSchema),
  });

  const onPressContinue = (values: NewItineraryStepOneFormData) => {
    console.log(values);
  };

  return { control, handleSubmit, onPressContinue };
};
