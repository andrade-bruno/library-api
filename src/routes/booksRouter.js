import express from 'express'
import BookController from '../controllers/BookController.js'

const BooksRouter = express.Router()

BooksRouter
	.get('/books', BookController.getAllBooks)
	.get('/books/:id', BookController.getBookById)
	.post('/books', BookController.createBook)
	.put('/books/:id', BookController.updateBook)
	.delete('/books/:id', BookController.deleteBook)

export default BooksRouter