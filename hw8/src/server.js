import express from "express";
import cors from "cors"

import bookRouter from "./routers/bookRouter.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const startServer = () => {
    const app = express()
    app.use(cors())
    app.use(express.json())

    app.use("/api/products", bookRouter)

    app.use(notFoundHandler)

app.listen(3000 , ()=> {
    console.log("Server running on 3000 port");
    
})
}


export default startServer;