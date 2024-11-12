import { z } from 'zod';

const RegisterStepOneTouristSchema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório!' })
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/, 'Nome completo é obrigatório!'),
  phone: z.string({ required_error: 'Telefone é obrigátorio!' }).regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
    message: 'Insira um telefone válido!',
  }),
  isGuide: z.literal(false).default(false),
});

const RegisterStepOneGuideSchema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório!' })
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/, 'Nome completo é obrigatório!'),
  phone: z.string({ required_error: 'Telefone é obrigátorio!' }).regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
    message: 'Insira um telefone válido!',
  }),
  isGuide: z.literal(true).default(true),
  cadastur: z
    .string({ required_error: 'Cadastur é obrigatório para cadastro de guia!' })
    .regex(/^[0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2}$/, {
      message: 'O número de Cadastur deve estar no formato 99.999.999/9999-99',
    }),
});

const RegisterStepOneSchema = z.discriminatedUnion('isGuide', [
  RegisterStepOneTouristSchema,
  RegisterStepOneGuideSchema,
]);

export default RegisterStepOneSchema;
