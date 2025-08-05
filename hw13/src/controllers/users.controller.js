// import User from "../db/User.js"

// import { addAdmin } from "../services/user.service.js"
import * as usersService from "../services/user.service.js"

import { adminAddSchema , adminChangePasswordSchema } from "../validation/users.schema.js"
import HttpExeption from "../utils/HttpExeption.js"

import validateBody from "../utils/validateBody.js"

export const addAdminController = async (req , res) => {
    await validateBody(adminAddSchema, req.body)
    const result = await usersService.addAdmin(req.body)
    // console.log("DATA", result);
    res.status(201).json({
        message: `Пользователь ${result.email} добавлен`
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