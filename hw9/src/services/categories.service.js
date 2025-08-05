import Category from "../db/Category.js"

export const getCategories = () => Category.findAll()

export const addCategories = payload => Category.create(payload)

