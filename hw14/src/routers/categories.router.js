import { Router } from "express"
import {addCategoriesController} from "../controllers/categories.controller.js";

const categoriesRouter = Router()

    categoriesRouter.post("/addCategory", addCategoriesController)
    

export default categoriesRouter;