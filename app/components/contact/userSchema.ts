import { z } from "zod";

const plans = ["TiendaOnline", "LandingPage", "DesarrolloLibre"] as const;

export type Plans = (typeof plans)[number];

export const mappedPlans: {[key in Plans]: string} = {
    TiendaOnline: "Tienda Online",
    LandingPage: "Landing Page",
    DesarrolloLibre: "Desarrollo Libre"
}

export const userSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(20, {
      message: "Name must be less than 20 characters long",
    }),
  surname: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(25, {
      message: "Name must be less than 25 characters long",
    }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  plan: z.enum(plans, {
    errorMap: () => ({ message: "Please select a plan" }),
  }),
  comment: z
    .string()
    .max(300, {
      message: "Name must be less than 300 characters long",
    }),
})