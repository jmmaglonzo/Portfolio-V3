import { z } from "zod";
export const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(50, {
      message: "Name must be less than 50 characters long",
    }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters long",
  }),
});
