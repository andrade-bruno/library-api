import express from 'express'
import BookController from '../controllers/book.js'

const booksRouter = express.Router()

booksRouter.get('/books', BookController.getAllBooks)

export default booksRouter