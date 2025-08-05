import * as categoriesService from "../services/categories.service.js"

import validateBody from "../utils/validateBody.js"

import { categoryAddSchema, categoryUpdateSchema } from "../validation/categories.schema.js"

export const getCategoriesController = async (req ,res)=> {
        const result = await categoriesService.getCategories()
        res.json(result)
}

export const addCategoriesController = async (req , res) => {
    await validateBody(categoryAddSchema, req.body)
    const result = await categoriesService.addCategories(req.body)

    res.status(201).json(result)
}

export const getCategoryByIdController = async (req , res) => {
    const {id} = req.params;
    const result = await categoriesService.getCategoryById(id)
    res.json(result)
}

export const updateCategoryByIdController = async (req , res) => {
    await validateBody(categoryUpdateSchema , req.body)
    const { id } = req.params
    const result = await categoriesService.updateCategoryById(id, req.body)
    res.status(201).json(result)

}

export const deleteCategoryController = async (req , res) => {
    const { id } = req.params 
    const result = await categoriesService.deleteCategoryById(id)
    res.status(201).json(`Обьект id=${id} успешно удален`)
}
