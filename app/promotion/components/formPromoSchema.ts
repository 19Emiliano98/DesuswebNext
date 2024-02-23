import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

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
    .string()
    .regex(phoneRegex, 'Invalid Number!'),
  website: z
    .string()
    .max(100, { message: "Name must be less than 100 characters long" })
})