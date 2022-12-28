import express from 'express'
import db from './config/db.connect.js'
import books from './models/BookModel.js'
import routes from './routes/index.js'

db.on('error', console.error.bind(console, '[failed to connect to mongodb]\n'))
db.once('open', () => console.info('[connected to mongodb]\n'))

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