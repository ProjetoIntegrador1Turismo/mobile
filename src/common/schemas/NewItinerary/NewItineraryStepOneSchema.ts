import { z } from 'zod';

const NewItineraryStepOneFormSchema = z.object({
  title: z
    .string({ required_error: 'Título é obrigatório! ' })
    .min(1, 'Título é obrigatório!')
    .max(50, 'Título deve ter no máximo 50 caracteres!'),
  averageCost: z
    .string({ required_error: 'Custo médio é obrigatório! ' })
    .min(1, 'Custo médio é obrigatório!'),
  days: z.string({ required_error: 'Dias é obrigatório!' }).min(1, 'Dias é obrigatório!'),
  description: z
    .string({ required_error: 'Descrição é obrigatória!' })
    .min(1, 'Descrição é obrigatória!')
    .max(1000, 'Descrição deve ter no máximo 1000 caracteres!'),
  imgCover: z.string({ required_error: 'Imagem de capa é obrigatória!' }),
});

export default NewItineraryStepOneFormSchema;
