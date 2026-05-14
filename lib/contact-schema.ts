import { z } from "zod";

// Shared validation contract used by both client form and API route.
export const contactSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  topic: z.string().min(2).max(255),
  message: z.string().min(1),
});

export type ContactFormValues = z.infer<typeof contactSchema>;