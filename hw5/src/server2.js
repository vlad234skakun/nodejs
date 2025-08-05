import express from "express";
import * as fs from "node:fs/promises"

const app = express()

app.get("/", async (req , res)=>{

    try {
        throw new Error("Error Server2")
    } catch (error) {
        const LogMessage = error.message + '\n'
        try {
            await fs.appendFile("src/errors.log", LogMessage)
            
        } catch (Logerror) {
            console.log("Ошибка с файлом");
            
        }
        res.header('Content-Type', 'text/plain')
        res.status(500).send("Internal Server Error")
    }

})


app.listen(4000, () => { console.log("Server running on 4000 port")})