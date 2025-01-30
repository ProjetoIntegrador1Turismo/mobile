import { z } from 'zod';

const NewItineraryStepOneFormSchema = z.object({
  title: z.string({ required_error: 'Título é obrigatório! ' }).min(1, 'Título é obrigatório!'),
  averageCost: z
    .string({ required_error: 'Custo médio é obrigatório! ' })
    .min(1, 'Custo médio é obrigatório!'),
  days: z.string({ required_error: 'Dias é obrigatório!' }).min(1, 'Dias é obrigatório!'),
  description: z
    .string({ required_error: 'Descrição é obrigatória!' })
    .min(1, 'Descrição é obrigatória!'),
  imgCover: z.string(),
});

export default NewItineraryStepOneFormSchema;
