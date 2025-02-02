import EditItineraryStepOneFormSchema from 'src/common/schemas/EditItinerary/EditItinerarySchemaStepOne';
import { z } from 'zod';

export type EditItineraryStepOneFormData = z.infer<typeof EditItineraryStepOneFormSchema>;
