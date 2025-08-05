import express from "express"
import cors from "cors"

import NotFoundHandler from "./middlewares/NotFounHandler.js"
import categoriesRouter from "./routers/categories.router.js"
import errorHandler from "./middlewares/errorHandler.js"

const startServer = () => {
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use("/api/categories", categoriesRouter)

    app.use(NotFoundHandler)
    app.use(errorHandler)

    const port = process.env.PORT || 3000

    app.listen(port, () => {
        console.log("Server running on 3000 port");

    })
}

export default startServer;

