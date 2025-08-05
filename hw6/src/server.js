import express from "express"
import cors from "cors"
import * as Yup from "yup"


import NotFoundHandler from "./middleware/NotFoundHandler.js"
import Product from "./db/Product.js"

const productAddSchema = Yup.object({
  name: Yup.string().required("Поле 'name' обязательно"),
  price: Yup.number()
    .typeError("Поле 'price' должно быть числом")
    .min(0, "Цена не может быть меньше 0")
    .required("Поле 'price' обязательно"),
});

const startServer = () => {
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.get("/products" , async (req , res) => {
        const result = await Product.findAll() 
        res.json(result)
    })
    app.post("/" , async (req , res) => {
        try {
            await productAddSchema.validate(req.body)
            const result = await Product.create(req.body)
            res.status(201).json(result)
        } catch (error) {
            res.status(404).json({
            message: error.message
        })
        }

    })

    


    app.use(NotFoundHandler)

    const port = process.env.PORT || 3000
    app.listen(port, ()=> {
        console.log("Server running on 3000 port");
        
    })
}
export default startServer