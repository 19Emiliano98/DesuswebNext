import { z } from "zod";

export const formPromoSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be less than 20 characters long" }),
  surname: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(25, { message: "Name must be less than 25 characters long" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email" }),
  phone: z
    .string(),
    /* .min( 8, { message: "Name must be at least 8 characters long" } )
    .max( 30, { message: "Name must be less than 30 numbers long" }), */
  website: z
    .string()
    .max(100, { message: "Name must be less than 100 characters long" })
})