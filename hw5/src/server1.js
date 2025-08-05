import express from "express";
import cors from "cors"

const app = express()

app.get("/", (req, res)=>{
    const authorization = req.headers.authorization
    res.header('Content-Type', 'text/plain')
    if(!authorization) {
        res.status(404).send('Unauthorized')
    } else {
        res.status(200).send('Authorization header received')
    }
    
})

app.listen(3000, ()=> { console.log("Server running on 3000 port")})