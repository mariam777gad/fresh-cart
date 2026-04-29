import * as zod from "zod";

export const UpdateUserDataSchema = zod
  .object({
    name: zod
      .string()
      .nonempty("User Name is required")
      .min(3, "Must contain at least 3 characterss"),
    email: zod
      .string()
      .regex(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm, "Enter valid Email"),
    phone: zod
      .string()
      .regex(/^(?:\+20|0)?1[0125][0-9]{8}$/, "Enter Egyptian phone number"),
  })

