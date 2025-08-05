import User from "../db/User.js"

import bcrypt from "bcrypt"
import HttpExeption from "../utils/HttpExeption.js"

export const addUser = async (payload) => {
    const existingUser = await User.findOne({where:{
        email: payload.email
    }})
    console.log(existingUser);
    
    if (existingUser) throw HttpExeption(409, `пользовать с email ${payload.email} уже существует`)
    const hashPassword = await bcrypt.hash(payload.password, 10)
    return User.create({
        ...payload,
        password: hashPassword,
        role: "user"
    })
}

export const deleteUser = async (id, {password}) => {
    const user = await User.findByPk(id);
    if(!user) throw HttpExeption(404, "Пользователь не найден")
    const passwordCompare = await bcrypt.compare(password, user.password)
    if(!passwordCompare) throw HttpExeption(400, "Не верный пароль")
    await user.destroy()
    return { success: true }

}

export const changeUserPassword = async (id, {oldPassword, newPassword}) => {
    const user = await User.findByPk(id)
    if (!user) throw HttpExeption(404, `user под номером ${id} не найден`)
    const passwordCompare = await bcrypt.compare(oldPassword, user.password)
    if (!passwordCompare) throw HttpExeption(400, "Не верный старый пароль")
    const hashPassword = await bcrypt.hash(newPassword, 10)
    user.password = hashPassword
    user.save()
    return user
}

export const changeUserEmail = async(id, payload) => {
    const user = User.findByPk(id)
    if(!user) throw HttpExeption(401. `emeil: ${payload.email} не найден`)
    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) throw HttpExeption(400, "Не верный старый пароль")
        const existingUser = User.findOne({
    where:{
        email: payload.newEmail}})
        if(existingUser) throw HttpExeption(409, `${patload.newEmail} уже используется другим пользователем`)
    user.email = payload.newEmail
    user.save()
    return user

}

export const addAdmin = async (payload) => {
    const hashPassword = await bcrypt.hash(payload.password, 10)
    return User.create({
    ...payload,
    password: hashPassword,
    role: "admin"
})
}

export const changeAdminPassword = async (id , {oldPassword , newPassword}) => {
    const user = await User.findByPk(id)
    if (!user) return null

    const passwordCompare = await bcrypt.compare(oldPassword , user.password)

    if (!passwordCompare) throw HttpExeption(400 , "Не верный старый пароль")
    
    const hashPassword = await bcrypt.hash(newPassword, 10)
    user.password = hashPassword
    await user.save()
    return user

}