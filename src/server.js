import express from 'express'

const server = express()
server.use(express.json())

const books = [
	{
		id: 1,
		title: 'Lord of rings'
	},
	{
		id: 2,
		title: 'Hobbit'
	}
]

server.get('/', (req, res) => {
	res.status(200).send('Node course')
})

server.get('/books', (req, res) => {
	res.status(200).json(books)
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
		   message: 'Book created successfully', book: {...book}
	   })
	} else {
		res.status(406).json({
			message: `Book '${req.body.title}' already exists`
		})
	}
})

export default server