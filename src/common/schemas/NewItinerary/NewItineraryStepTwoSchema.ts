import { z } from 'zod';

const NewItineraryStepTwoFormSchema = z.object({
  interestPointIds: z
    .array(z.number(), {
      required_error: 'Seu roteiro deve possuir pelo menos 1 ponto de interesse!',
    })
    .min(1, 'Seu roteiro deve possuir pelo menos 1 ponto de interesse!'),
});

export default NewItineraryStepTwoFormSchema;
