// import User from "../db/User.js"

// import { addAdmin } from "../services/user.service.js"
import * as usersService from "../services/user.service.js"

import { adminAddSchema , adminChangePasswordSchema, userDeleteSchema , userUpdateRole} from "../validation/users.schema.js"
import HttpExeption from "../utils/HttpExeption.js"

import validateBody from "../utils/validateBody.js"

export const AddUsersController = async (req , res) => {
    await validateBody(adminAddSchema, req.body)
    const result = await usersService.addUser(req.body)
    res.status(201).json({
        message:`Пользователь ${result.email} добавлен`
    })
}

export const deleteUserController = async (req , res) => {
    await validateBody(userDeleteSchema, req.body)
    const {id} = req.user;
    const result = await usersService.deleteUser(id, req.body)
    res.status(201).json({
        message: "Аккаунт успешно удалён"
    })
}

export const updateRoleController = async (req , res) => {
    const email = await req.body
    console.log(email);
    await validateBody(userUpdateRole, email)
    const result = await usersService.updateRole(email)
        console.log(result.email);
    res.status(200).json({
        
        message: `Пользователь ${result.email} стал admin`
    })
}

export const changeUserPasswordController = async (req , res) => {
    await validateBody(adminChangePasswordSchema, req.body)
    const {id} = req.params
    const result = await usersService.changeUserPassword(id, req.body)
    res.status(201).json({
    message: `user под номером ${id} поменял пароль`}) 
}

export const changeUserEmailController = async (req , res) => {
    const {id} = req.user
    const result = await usersService.changeUserEmail(id, req.body)
    res.status(200).json({
    message: `Email пользователя с ID=${id} успешно изменен`,
    email: result.email,
  })
}

export const addAdminController = async (req , res) => {
    await validateBody(adminAddSchema, req.body)
    const result = await usersService.addAdmin(req.body)
    // console.log("DATA", result);
    res.status(201).json({
        message: `Admin ${result.email} добавлен`
    })
}

export const changeAdminPasswordController = async (req , res) => {
    await validateBody(adminChangePasswordSchema, req.body)
    const {id} = req.params
    const result = await usersService.changeAdminPassword(id, req.body) 
    if (!result) throw HttpExeption(404, `Админ с номером id=${id} не найден`)
    res.status(201).json({
    message: `Admin под номером ${id} поменял пароль`})
}