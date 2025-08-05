import Book from "../db/Book.js"


export const getBooks = () => Book.findAll()

export const addBooks = payload => Book.create(payload)

export const deleteBooks = payload => Book.destroy({
    where: {
        id: payload
    }
})

export const findBook = payload => Book.findByPk(payload)

export const updateBook = (id , payload) => Book.update(payload , { 
    where: {id},
    returning: true
})
