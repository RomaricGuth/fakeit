import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  comment: z.string().optional()
}).strict();

export default formSchema;