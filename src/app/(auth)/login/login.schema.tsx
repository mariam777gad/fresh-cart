import * as zod from "zod";

export const loginSchema = zod.object({
  email: zod
    .string()
    .regex(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm, "Enter valid Email"),
  password: zod
    .string()
    .regex(
      /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
      "Enter a Strong Password !",
    ),
});
