import { Router } from "express"

import { loginController } from "../controllers/auth.controller.js";

const authRoutes = Router()

authRoutes.post("/login", loginController)


export default authRoutes;