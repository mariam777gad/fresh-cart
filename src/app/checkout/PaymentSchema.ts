import * as z from "zod";

export const paymentSchema = z.object({
  details: z
    .string()
    .min(1, "Address details are required")
    .min(10, "Please enter a detailed address (at least 10 characters)"),
    
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^01[0125][0-9]{8}$/, "Invalid phone number. Must be a valid 11-digit Egyptian number"),
    
  city: z
    .string()
    .min(1, "City is required")
    .max(50, "City name is too long"),
});

export type UserShippingAddress = z.infer<typeof paymentSchema>;