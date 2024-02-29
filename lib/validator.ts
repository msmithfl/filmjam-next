import { z } from "zod";

export const jamFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be less than 400 characters"),
  genre: z.string(),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  isFree: z.boolean(),
  url: z.string().url(),
});
