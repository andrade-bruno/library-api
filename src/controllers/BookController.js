import BookModel from "../models/BookModel.js"

class BookController {
	static getAllBooks = (req, res) => {
		BookModel.find((error, books) => {
			res.status(200).json(books)
		})
	}

	static createBook = (req, res) => {
		let book = new BookModel(req.body)
		book.name = 'asd'

		book.save((error) => {
			if (!error) {
				res.status(201).send({ message: 'Book created successfully', book: { ...book.toJSON() } })
			} else {
				res.status(500).send({ message: `Could'nt create the book - ${error.message}` })
			}
		})
	}
}

export default BookController