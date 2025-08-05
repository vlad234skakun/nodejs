import { Router } from "express";

import { addAdminController , changeAdminPasswordController } from "../controllers/users.controller.js";
import { authenticate, isSuperAdmin } from "../middlewares/authorization.js";

const usersRoutes = Router()

usersRoutes.post("/admins", authenticate, isSuperAdmin, addAdminController)
usersRoutes.put("/admins/:id/password", authenticate, isSuperAdmin, changeAdminPasswordController)

export default usersRoutes