import User from "../db/User.js";
import HttpExeption from "../utils/HttpExeption.js";
import bcrypt from "bcrypt"

import jwt from "jsonwebtoken"

const { JWT_SECRET } = process.env

export const login = async ({email, password }) => {
    const user = await User.findOne({
        where: {
            email,
        }
    })
    if (!user) throw HttpExeption(404, `user email=${email} не найден`)
    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) throw HttpExeption(401, `неверный пароль`)
        const payload = { 
        id: user.id
        }
        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "24"})
        return token
}

export const isAdmin = (req , res , next) => {
    if(req.user.role !== "superadmin") throw HttpExeption(403, "Not allow")
        nexy()
}