import type { UseFormReturn } from 'react-hook-form';
import { NewItineraryStepTwoFormData } from 'src/components/Guide/NewItineraryForm/NewItineraryFormStepTwo/NewItineraryFormStepTwo.types';
import { create } from 'zustand';

import { NewItineraryStepOneFormData } from '~/src/components/Guide/NewItineraryForm/NewItineraryFormStepOne/NewItineraryFormStepOne.types';

type NewItineraryStore = {
  formMethods?: UseFormReturn<NewItineraryStepTwoFormData>;
  stepOneData: NewItineraryStepOneFormData | null;
  setStepOneData: (data: NewItineraryStepOneFormData) => void;
  setFormMethods: (methods: UseFormReturn<NewItineraryStepTwoFormData>) => void;
  clearFormMethods: () => void;
};

export const useNewItineraryFormStore = create<NewItineraryStore>((set) => ({
  formMethods: undefined,
  stepOneData: null,
  setStepOneData: (data) => set({ stepOneData: data }),
  setFormMethods: (methods) => set({ formMethods: methods }),
  clearFormMethods: () => set({ formMethods: undefined }),
}));
