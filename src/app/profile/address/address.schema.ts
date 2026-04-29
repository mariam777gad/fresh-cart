import * as zod from "zod";

export const AddressSchema = zod
  .object({
    name: zod
      .string()
      .nonempty("User Name is required")
      .min(3, "Must contain at least 3 characterss"),
    details: zod.string().min(3, "Enter Specific details about your address"),
    phone: zod
      .string()
      .regex(/^(?:\+20|0)?1[0125][0-9]{8}$/, "Enter Egyptian phone number"),
    city: zod
      .string()
      .nonempty("User Name is required")
      .min(3, "Enter City Name"),
  })
