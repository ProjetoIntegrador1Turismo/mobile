import EditProfileSchema from 'src/common/schemas/EditProfile/EditProfileSchema';
import { z } from 'zod';

export type EditProfileFormData = z.infer<typeof EditProfileSchema>;
