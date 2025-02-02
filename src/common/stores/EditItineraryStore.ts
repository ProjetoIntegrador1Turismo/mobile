import type { UseFormReturn } from 'react-hook-form';
import { EditItineraryStepOneFormData } from 'src/components/Guide/EditItineraryForm/EditItineraryFormStepOne/EditItineraryFormStepOne.types';
import { EditItineraryStepTwoFormData } from 'src/components/Guide/EditItineraryForm/EditItineraryFormStepTwo/EditItineraryFormStepTwo.types';
import { create } from 'zustand';

type EditItineraryStore = {
  formMethods?: UseFormReturn<EditItineraryStepTwoFormData>;
  stepOneData: EditItineraryStepOneFormData | null;
  interestPointIds: number[] | null;
  setInterestPointIds: (ids: number[]) => void;
  setStepOneData: (data: EditItineraryStepOneFormData) => void;
  setFormMethods: (methods: UseFormReturn<EditItineraryStepTwoFormData>) => void;
  clearFormMethods: () => void;
};

export const useEditItineraryFormStore = create<EditItineraryStore>((set) => ({
  formMethods: undefined,
  stepOneData: null,
  interestPointIds: null,
  setInterestPointIds: (ids) => set({ interestPointIds: ids }),
  setStepOneData: (data) => set({ stepOneData: data }),
  setFormMethods: (methods) => set({ formMethods: methods }),
  clearFormMethods: () => set({ formMethods: undefined }),
}));
