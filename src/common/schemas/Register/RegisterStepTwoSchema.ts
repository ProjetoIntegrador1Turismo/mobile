import { z } from 'zod';

const RegisterStepTwoSchema = z
  .object({
    email: z
      .string({ required_error: 'E-mail é obrigatório!' })
      .email({ message: 'Insira um e-mail válido!' }),
    password: z.string().min(5, { message: 'Senha deve ter no minimo 5 caracteres!' }),
    confirmPassword: z.string().min(5, { message: 'Senha deve ter no minimo 5 caracteres!' }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'Senhas devem coincidir!',
      path: ['confirmPassword'],
    }
  );

export default RegisterStepTwoSchema;
