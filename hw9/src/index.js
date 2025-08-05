import "dotenv/config"
import startServer from "./server.js";
import { connectDatabase } from "./db/sequelize.js";
import "./db/User.js"

const bootstrap = async() => {
    await connectDatabase()
    startServer()

}

bootstrap()

