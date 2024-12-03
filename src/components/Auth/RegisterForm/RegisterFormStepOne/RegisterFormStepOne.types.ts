import RegisterStepOneSchema from 'src/common/schemas/Register/RegisterStepOneSchema';
import { z } from 'zod';

export type RegisterFormStepOneFormData = z.infer<typeof RegisterStepOneSchema>;
