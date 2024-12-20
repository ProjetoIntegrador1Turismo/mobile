import { z } from 'zod';

const LoginSchema = z.object({
  username: z
    .string({ required_error: 'E-mail é obrigatorio!' })
    .email({ message: 'Insira um e-mail válido!' }),
  password: z.string().min(5, { message: 'Senha deve ter no minimo 5 caracteres!' }),
});

export default LoginSchema;
