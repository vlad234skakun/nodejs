import { Router } from "express";
import { getBooksController, addBooksController, deleteBooksController, putBooksController } from "../controllers/books.controllers.js";

const bookRouter = Router()

bookRouter.get("/books", getBooksController)
bookRouter.post("/books", addBooksController)
bookRouter.delete("/books/:id", deleteBooksController)
bookRouter.put("/books/:id", putBooksController)
// Добавить DELETE / PUT

export default bookRouter