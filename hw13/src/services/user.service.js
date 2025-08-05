import User from "../db/User.js"

import bcrypt from "bcrypt"
import HttpExeption from "../utils/HttpExeption.js"

export const addAdmin = async (payload) => {
    const hashPassword = await bcrypt.hash(payload.password, 10)
    return User.create({
    ...payload,
    password: hashPassword,
    role: "admin"
})
}

export const changeAdminPassword = async (id , {oldPassword , newPassword}) => {
    const user = await User.findByid(id)
    if (!user) return null

    const passwordCompare = await bcrypt.compare(oldPassword , user.password)

    if (!passwordCompare) throw HttpExeption(400 , "Не верный старый пароль")
    
    const hashPassword = await bcrypt.hash(newPassword, 10)
    user.password = hashPassword
    await user.save()
    return user

}