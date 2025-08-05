import express from "express";

const app = express()

app.use("/", (req , res) => {
    res.header('Content-Type', 'text/plain')
    if(req.method === "PUT") {
        res.status(200).send('PUT-запрос обработан')
    } else if(req.method === "DELETE") {
        res.status(200).send('DELETE-запрос обработан')    
    } else {
        res.status(404).send("Метод не поддерживается")
    }
})

app.listen(5000, ()=>{ console.log("server3 running on 5000 port")})