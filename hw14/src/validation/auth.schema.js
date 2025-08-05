import * as Yup from "yup"

import { emailValidation, PasswordValidate } from "./users.schema.js"

export const loginSchema = Yup.object({
    email: emailValidation, 
    password: PasswordValidate
})