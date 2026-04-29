import * as zod from "zod";

export const registerSchema = zod
  .object({
    name: zod
      .string()
      .nonempty("User Name is required")
      .min(3, "Must contain at least 3 characterss"),
    email: zod
      .string()
      .regex(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm, "Enter valid Email"),
    password: zod
      .string()
      .regex(
        /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
        "Enter a Strong Password !",
      ),
    rePassword: zod.string().nonempty("Re-Password is required"),
    phone: zod
      .string()
      .regex(/^(?:\+20|0)?1[0125][0-9]{8}$/, "Enter Egyptian phone number"),
  })
  .refine(
    ({ password, rePassword }) => {
      return password === rePassword;
    },
    {
      path: ["rePassword"],
      error: "Password & Re-password should be the same !!",
    },
  );
