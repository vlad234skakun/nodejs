import HttpExeption from "../utils/HttpExeption.js"
import jwt from "jsonwebtoken"

import User from "../db/User.js"

const { JWT_SECRET } = process.env

export const authenticate = async (req , res , next) => {
    const { authorization } = req.headers;
    
    
    if (!authorization) throw HttpExeption(404," Шапка авторизации отсутсвует" )
        const [ bearer, token ] = authorization.split(" ")
    if (bearer !== "Bearer") throw HttpExeption(404, "Bearer missing")
        
        try {
            const {id} = jwt.verify(token , JWT_SECRET)
            const user = await User.findByPk(id)
            
            if (!user) {
                return next(HttpExeption(404, "user not found"))
            }
            req.user=user
            next()
        } catch (error) {
            throw HttpExeption(401, `Ошибка при проверке токена ${error.message}`)
        }
}

export const isSuperAdmin = (req , res, next) => {
    if(req.user.role !== "superadmin") throw HttpExeption(403, "Вы не superadmin")
    next()
}

export const isAdmin = (req , res , next) => {
    if(req.user.role !== "admin") throw HttpExeption(403, "Вы не admin")
        next()
}
