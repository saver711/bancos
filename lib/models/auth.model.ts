import { signInSchema, signUpSchema } from "@/constants/form-schemas.const"
import { z } from "zod"

export type SignInParams = z.infer<typeof signInSchema>
export type SignUpParams = z.infer<typeof signUpSchema>
