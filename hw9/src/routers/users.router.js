import { Router } from "express";

import { addAdminController , changeAdminPasswordController, AddUsersController, deleteUserController, changeUserPasswordController, changeUserEmailController} from "../controllers/users.controller.js";
import { authenticate, isSuperAdmin } from "../middlewares/authorization.js";

const usersRoutes = Router()

usersRoutes.post("/register", AddUsersController)
usersRoutes.post("/:id/delete", deleteUserController)
usersRoutes.post("/:id/changeemail", changeUserEmailController)
usersRoutes.post("/:id/userpassword", changeUserPasswordController)
usersRoutes.post("/admins", authenticate, isSuperAdmin, addAdminController)
usersRoutes.put("/admins/:id/password", authenticate, isSuperAdmin, changeAdminPasswordController)

export default usersRoutes