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

export const updateRole = async ({email}) => {
    const user = await User.findOne({where:{
        email: email,
        role: "user"
    }})
    if (!user) throw HttpExeption(404, "Пользователь не найден")
    user.role = "admin",
    user.save()
    return user
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

export const changeUserEmail = async(id, {email , password , newEmail}) => {
    const user = await User.findByPk(id)
    if(!user) throw HttpExeption(401, `emeil: ${email} не найден`)
    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) throw HttpExeption(400, "Не верный старый пароль")
        const existingUser = await User.findOne({
    where:{
        email: newEmail}})
        if(existingUser) throw HttpExeption(409, `${newEmail} уже используется другим пользователем`)
    user.email = newEmail
    await user.save()
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