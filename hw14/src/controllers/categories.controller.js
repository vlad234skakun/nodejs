import * as categoriesService from "../services/categories.service.js"

import validateBody from "../utils/validateBody.js"

import { categoryAddSchema} from "../validation/categories.schema.js"


export const addCategoriesController = async (req , res) => {
    await validateBody(categoryAddSchema, req.body)
    const result = await categoriesService.addCategories(req.body)

    res.status(201).json(result)
}

