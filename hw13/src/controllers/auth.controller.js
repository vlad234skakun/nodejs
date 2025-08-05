import validateBody from "../utils/validateBody.js"

import * as authServices from "../services/auth.service.js"

import { loginSchema } from "../validation/auth.schema.js"

export const loginController = async (req , res) => {
    await validateBody(loginSchema, req.body)
    const token = await authServices.login(req.body)
    res.json({token})
}

