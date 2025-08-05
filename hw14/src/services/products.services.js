import Product from "../db/Product.js"

export const addProduct = payload => Product.create(payload)

export const getProduct = () => Product.find().populate("category")