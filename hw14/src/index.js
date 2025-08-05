import "dotenv/config"
import startServer from "./server.js";
import  connectDatabase from "./db/connectDatabase.js";

import Category from "./db/Category.js";
import Product from "./db/Product.js";


const bootstrap = async() => {
    await connectDatabase()
  
    startServer()

}

bootstrap()

