import express from 'express'
import db from './config/db.connect.js'
import books from './models/BookModel.js'
import routes from './routes/index.js'

const server = express()
server.use(express.json())
routes(server)

server.get('/books/:id', (req, res) => {
	const id = req.params.id
	const idx = findBook(id)
	if (books[idx]) {
		res.status(200).json({ ...books[idx] })
	} else {
		res.status(404).json({ message: `Book #${id} not found` })
	}
})

server.put('/books/:id', (req, res) => {
	const id = req.params.id
	const idx = findBook(id)
	if (books[idx]) {
		books[idx].title = req.body.title
		res.status(200).json({
			message: 'Book updated successfully', book: { ...books[idx] }
		})
	} else {
		res.status(404).json({ message: `Book #${id} not found` })
	}
})

server.delete('/books/:id', (req, res) => {
	const id = req.params.id
	const idx = findBook(id)
	if (books[idx]) {
		books.splice(idx, 1)
		res.status(200).json({ message: `Book #${id} deleted successfully` })
	} else {
		res.status(404).json({ message: `Book #${id} not found` })
	}
})

function findBook(id) {
	return books.findIndex(book => book.id == id)
}

export default server