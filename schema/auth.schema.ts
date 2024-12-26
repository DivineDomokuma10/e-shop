import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),

  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" }),
});

export const signUpSchema = z.object({
  userName: z.string().refine((data) => {
    return data.length > 0;
  }, "This field is required"),

  email: z.string().email(),

  password: z.string().refine((value) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{9,}$/;
    return passwordRegex.test(value);
  }, "uppercase, lowercase, number & least 8 chars"),

  termsAndCondition: z.boolean().refine((bool) => bool === true),
});
