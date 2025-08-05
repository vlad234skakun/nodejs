import { Router } from "express";

import { addProductsController , getProductsController} from "../controllers/products.controller.js";

const productsRouter = Router()

    productsRouter.post("/addProducts" , addProductsController)
    productsRouter.get("/getProducts", getProductsController)

export default productsRouter;