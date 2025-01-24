import { z } from 'zod';

const EditProfileSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Nome é obrigatório!' })
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/, 'Nome completo é obrigatório!'),
  email: z.string().email(),
  password: z
    .string()
    .transform((str) => (str === '' ? undefined : str))
    .pipe(z.string().min(5, { message: 'Senha deve ter no minimo 5 caracteres!' }).optional()),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
    message: 'O número de telefone deve estar no formato (99) 99999-9999',
  }),
});

export default EditProfileSchema;
