import { z } from 'zod';

const contactSchema = z.object({
  email: z.string().email(),
  subject: z.string().max(1000).nonempty(),
  message: z.string().max(50000).nonempty(),
}).strict();

export default contactSchema;