import NewItineraryStepOneFormSchema from 'src/common/schemas/NewItinerary/NewItineraryStepOneSchema';
import { z } from 'zod';

export type NewItineraryStepOneFormData = z.infer<typeof NewItineraryStepOneFormSchema>;
