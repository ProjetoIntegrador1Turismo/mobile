import { z } from 'zod';

const RecoverySchema = z.object({
  email: z
    .string({ required_error: 'E-mail é obrigatorio!' })
    .email({ message: 'Insira um e-mail válido!' }),
});

export default RecoverySchema;
