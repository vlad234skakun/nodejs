import { Router } from "express"
import { getCategoriesController , addCategoriesController} from "../controllers/categories.controller.js";

const categoriesRouter = Router()

    categoriesRouter.get("/" , getCategoriesController)
    categoriesRouter.post("/", addCategoriesController)

export default categoriesRouter;