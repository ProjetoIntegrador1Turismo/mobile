import NewItineraryStepTwoFormSchema from 'src/common/schemas/NewItinerary/NewItineraryStepTwoSchema';
import { z } from 'zod';

export type NewItineraryStepTwoFormData = z.infer<typeof NewItineraryStepTwoFormSchema>;
