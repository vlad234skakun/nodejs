import Book from "../db/Book.js"
import * as booksServices from "../services/books.Services.js"

export const getBooksController = async (req, res) => {
    const result = await booksServices.getBooks()
    res.status(200).json(result)
}

export const addBooksController = async (req, res) => {
    const result = await booksServices.addBooks(req.body)
    res.status(200).json(result)
}

export const deleteBooksController = async (req, res) => {
    const { id } = req.params
    const result = await booksServices.deleteBooks(id)
    if (result === 0) {
        res.status(404).json({
            message: `Книга с id ${id} не найдена`,
        })
    }
    res.status(200).json({
        message: `Книга с id ${id} успешно удалена`,
    })
}

export const putBooksController = async (req , res) => {
    const { id } = req.params
    const payload = req.body
    const result = await booksServices.findBook(id)
        if (!result) {
            return res.status(404).json({
                message: `Книга с id ${id} не найдена`
            })
        }
    const updateresult = await booksServices.updateBook(id , payload)

    res.json({
    message: `Книга обновлена`,
    data: updateresult
  })
}