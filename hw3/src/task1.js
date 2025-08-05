import * as fs from "node:fs/promises"
import path from "node:path"


const tastpath = path.resolve("src", "data")

const isFolder = async path => {
    try {
        await fs.access(path)
        return true
    } catch (error) {
        if (error.code === 'ENOENT') {
            return false;
        }
        throw error;
    }
}

const deletFolder = async path => {
    setTimeout(async () => {
        try {
            await fs.rm(path, { recursive: true, force: true })
            console.log("папка удалилась через 5 секунд");

        } catch (error) {
            console.log("Ошибка при удалении");
        }
    }, 5000);
}


const makeDirectory = async () => {
    try {
        const exists = await isFolder(tastpath)
        if (exists) {
            console.log("Папка уже существует");

        }
        await fs.mkdir(tastpath)
        console.log("Директория создана");

        deletFolder(tastpath)

    } catch (error) {
        console.log("Ошибка:", error.message);

    }
}

makeDirectory()

