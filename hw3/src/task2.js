import * as fs from "node:fs/promises"
import path from "node:path"
import detect from "detect-file-encoding-and-language"

const infopath = path.resolve("src" , "info.txt")

const makeFile = async () => {
    try {
        await fs.writeFile(infopath, 'Node.js is awesome!')
        console.log("Файл создан");

        const encoding = await detect(infopath)
        const data = await fs.readFile(infopath, encoding)
        console.log("Файд прочитан", data);
        
        
    } catch (error) {
        console.log("Error", error.message);
        
    }
}

makeFile()