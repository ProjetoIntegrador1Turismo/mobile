import RecoverySchema from 'src/common/schemas/Recovery/RecoverySchema';
import { z } from 'zod';

export type RecoveryFormData = z.infer<typeof RecoverySchema>;
