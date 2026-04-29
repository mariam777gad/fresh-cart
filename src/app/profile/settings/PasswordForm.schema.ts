import { z } from "zod";

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, "Current password is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    rePassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
  });

export type ChangePasswordType = z.infer<typeof changePasswordSchema>;
