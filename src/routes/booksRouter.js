import express from 'express'
import BookController from '../controllers/BookController.js'

const BooksRouter = express.Router()

BooksRouter
	.get('/books', BookController.getAllBooks)
	.get('/books/:id', BookController.getBookById)
	.post('/books', BookController.createBook)
	.put('/books/:id', BookController.updateBook)

export default BooksRouter