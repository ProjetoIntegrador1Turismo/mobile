import RegisterStepTwoSchema from 'src/common/schemas/Register/RegisterStepTwoSchema';
import { z } from 'zod';

export type RegisterStepTwoFormData = z.infer<typeof RegisterStepTwoSchema>;

export interface RegisterFormStepTwoViewModelParams {
  StepOneData: {
    name: string;
    phone: string;
    cadastur?: string;
  };
}

export interface RegisterFormStepTwoProps {
  StepOneData: {
    name: string;
    phone: string;
    cadastur?: string;
  };
}
