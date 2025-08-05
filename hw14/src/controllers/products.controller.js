import validateBody from "../utils/validateBody.js"

import * as productsServices from "../services/products.services.js"

import { addProductSchema } from "../validation/products.schema.js"

export const addProductsController = async (req , res) => {
    await validateBody(addProductSchema, req.body)
    const result = await productsServices.addProduct(req.body)
    console.log(result);
    
    res.status(201).json(`продукт ${result.name} успещно добавлен`)
}

export const getProductsController = async (req,res) => {
    const result = await productsServices.getProduct()
    res.json(result)
}