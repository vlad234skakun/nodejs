import fs from "node:fs/promises"
import detect from "detect-file-encoding-and-language"

const logMessage = async (message) => {
    const filepath = "src/data/log.txt"
    await fs.appendFile(filepath, `${message}`)
    const encoding = await detect(filepath)
    const text = await fs.readFile(filepath, encoding)
    console.log(text);
    
}


export default logMessage;
