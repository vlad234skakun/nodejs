import dotenv from "dotenv/config"
import startServer from "./server.js";
import {connectDatabase} from "../src/db/sequelize.js";
import "./db/Product.js";


const bootstrap = async () => {
    
    await connectDatabase()
    startServer()

}

bootstrap()

