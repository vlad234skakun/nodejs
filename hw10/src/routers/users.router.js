import { Router } from "express";

import { addAdminController , changeAdminPasswordController, AddUsersController, deleteUserController, changeUserPasswordController, updateRoleController, changeUserEmailController} from "../controllers/users.controller.js";
import { authenticate, isSuperAdmin, isAdmin } from "../middlewares/authorization.js";

const usersRoutes = Router()

usersRoutes.post("/register", AddUsersController)
usersRoutes.post("/:id/delete",authenticate, deleteUserController)
usersRoutes.post("/update-role",authenticate ,isAdmin, updateRoleController)
usersRoutes.put("/:id/changeemail", authenticate, changeUserEmailController)
usersRoutes.post("/:id/userpassword", changeUserPasswordController)
usersRoutes.post("/admins", authenticate, isSuperAdmin, addAdminController)
usersRoutes.put("/admins/:id/password", authenticate, isSuperAdmin, changeAdminPasswordController)

export default usersRoutes