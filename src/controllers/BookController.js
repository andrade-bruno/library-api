import BookModel from "../models/BookModel.js"

class BookController {
	static getAllBooks = (req, res) => {
		BookModel.find((error, books) => {
			res.status(200).json(books)
		})
	}

	static createBook = (req, res) => {
		let book = new BookModel(req.body)

		book.save((error) => {
			if (!error) {
				res.status(201).send({ message: 'Book created successfully', book: { ...book.toJSON() } })
			} else {
				res.status(500).send({ message: `Could'nt create the book`, error: `${error.message}` })
			}
		})
	}

	static updateBook = (req, res) => {
		const id = req.params.id
		
		BookModel.findByIdAndUpdate(id, {$set: req.body}, (error, doc) => {
			if (!error) {
				res.status(200).json({ message: `Book ${id} updated successfully` })
			} else {
				res.status(500).json({ message: `Could'nt update book ${id}`, error: `${error.message}` })
			}
		})
	}
}

export default BookController