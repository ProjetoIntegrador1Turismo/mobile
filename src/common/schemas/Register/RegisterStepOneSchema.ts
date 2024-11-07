import { z } from 'zod';

const RegisterStepOneSchema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório!' })
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/, 'Nome completo é obrigatório!'),
  phone: z.string({ required_error: 'Telefone é obrigátorio!' }).regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
    message: 'Insira um telefone válido!',
  }),
});

export default RegisterStepOneSchema;
