import RegisterStepOneSchema from 'src/common/schemas/Register/RegisterStepOneSchema';
import { z } from 'zod';

export type RegisterStepOneFormData = z.infer<typeof RegisterStepOneSchema>;
