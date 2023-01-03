import express from 'express'
import AuthorController from '../controllers/AuthorController.js'

const AuthorsRouter = express.Router()

AuthorsRouter
	.get('/authors', AuthorController.getAllAuthors)
	.get('/authors/:id', AuthorController.getAuthorById)
	.post('/authors', AuthorController.createAuthor)
	.put('/authors/:id', AuthorController.updateAuthor)
	.delete('/authors/:id', AuthorController.deleteAuthor)

export default AuthorsRouter