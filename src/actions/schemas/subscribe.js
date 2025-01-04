import { z } from 'zod';

const formSchema = z.object({
  email: z.string(),
  comment: z.string().optional()
});

export default formSchema;