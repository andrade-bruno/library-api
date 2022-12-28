import express from 'express'
import db from './config/db.connect.js'
import books from './models/books.js'

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
	res.status(200).send('Node course')
})

server.get('/books', (req, res) => {
	books.find((error, books) => {
		res.status(200).json(books)
	})
})

server.get('/books/:id', (req, res) => {
	const id = req.params.id
	const idx = findBook(id)
	if (books[idx]) {
		res.status(200).json({ ...books[idx] })
	} else {
		res.status(404).json({ message: `Book #${id} not found` })
	}
})

server.post('/books', (req, res) => {
	let book = req.body
	const hasBook = books.some(item => (
		item.title.toLowerCase().includes(book.title.toLowerCase())
	))
	if (!hasBook) {
		book = {
			id: books.length + 1,
			...book
		}
		books.push(book)
		res.status(201).json({
			message: 'Book created successfully', book: { ...book }
		})
	} else {
		res.status(406).json({
			message: `Book '${req.body.title}' already exists`
		})
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