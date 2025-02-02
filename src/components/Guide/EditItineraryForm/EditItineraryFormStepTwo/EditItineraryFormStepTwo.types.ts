import EditItineraryStepTwoFormSchema from 'src/common/schemas/EditItinerary/EditItinerarySchemaStepTwo';
import { z } from 'zod';

export type EditItineraryStepTwoFormData = z.infer<typeof EditItineraryStepTwoFormSchema>;
