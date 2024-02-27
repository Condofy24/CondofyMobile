import { object, string, TypeOf } from "zod";

export const loginSchema = object({
  email: string().email({ message: "A valid email is required" }),
  password: string()
    .min(8, "Password must contain at least 8 characters")
    .max(20, "Password cannot exceed 20 characters"),
});

export type TLoginSchema = TypeOf<typeof loginSchema>;
