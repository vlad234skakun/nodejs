import * as fs from "node:fs/promises"
import dotenv from "dotenv"
import path from "node:path"
import detect from "detect-file-encoding-and-language"

dotenv.config()

const nameFile = process.env.FILENAME
// console.log(nameFile);
const filepath = path.resolve("src", nameFile)
// console.log(filepath);



const createFile = async () => {
    try {
        await fs.writeFile(filepath, "Файл был создан")
        console.log("Файл создан");
        const encoding = await detect(filepath)
        const data = await fs.readFile(filepath, encoding)
        console.log("Запись:", data);
        
    } catch (error) {
        console.log("Произошла ошибка");
        
    }    

}

createFile()
