import LoginSchema from 'src/common/schemas/Login/LoginSchema';
import { z } from 'zod';

export type LoginFormData = z.infer<typeof LoginSchema>;
