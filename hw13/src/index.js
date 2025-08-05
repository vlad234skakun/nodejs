import "dotenv/config"
import startServer from "./server.js";
import  connectDatabase from "./db/connectDatabase.js";
import mongoose from 'mongoose';
import Publisher from "./db/Publisher.js";
import Magazine from "./db/Magazine.js";


const bootstrap = async() => {
    await connectDatabase()
     const publisher = await Publisher.create({ name: 'Example House', location: 'Kyiv' });
    await Magazine.create({ title: 'Cool Magazine', issueNumber: 5, publisher: publisher._id });
    startServer()

}

bootstrap()

