import * as zod from "zod";

export const ForgetPasswordSchema = zod.object({
  email: zod
    .string()
    .regex(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm, "Enter valid Email"),
});


export const VerifyResetCodeSchema = zod.object({
  resetCode: zod
    .string()
    .min(5, { message: "Code must be 6 or 5 numbers" })
    .max(6, { message: "Code must be 6 or 5 numbers" })
    .regex(/^\d{5,6}$/, { message: "  Only Numbers" }),
});

export const ResetPasswordSchema = zod
  .object({
    email: zod
      .string()
      .regex(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm, "Enter valid Email"),

    newPassword: zod
      .string()
      .regex(
        /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
        "Enter a Strong Password !",
      ),
    confirmPassword: zod.string().nonempty("Confirm Password is required"),
  })
  .refine(
    ({ newPassword, confirmPassword }) => {
      return newPassword === confirmPassword;
    },
    {
      path: ["newPassword"],
      error: "New Password & Confirm Password should be the same !!",
    },
  );
