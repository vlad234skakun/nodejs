import { Router } from "express"
import { getCategoriesController , addCategoriesController, getCategoryByIdController, updateCategoryByIdController, deleteCategoryController} from "../controllers/categories.controller.js";

const categoriesRouter = Router()

    categoriesRouter.get("/" , getCategoriesController)
    categoriesRouter.get("/:id", getCategoryByIdController)
    categoriesRouter.post("/", addCategoriesController)
    categoriesRouter.put("/:id" , updateCategoryByIdController)
    categoriesRouter.post("/delete/:id", deleteCategoryController)

export default categoriesRouter;