import BookModel from "../models/BookModel.js"

class BookController {
	static getAllBooks = (req, res) => {
		BookModel
			.find()
			.populate('author')
			.exec((error, books) => {
				res.status(200).json(books)
			})
	}

	static getBookById = (req, res) => {
		const id = req.params.id

		BookModel
			.findById(id)
			.populate('author', ['name', 'nationality']) // Gathering only specific fields
			.exec((error, book) => {
				if (!error) {
					res.status(200).json(book)
				} else {
					res.status(404).send({ message: `Could'nt find book ${id}`, error: error.message })
				}
			})
	}

	static createBook = (req, res) => {
		let book = new BookModel(req.body)

		book.save((error) => {
			if (!error) {
				BookModel
					.findById(book._id)
					.populate('author')
					.exec((error, item) => {
						if (!error) res.status(201).json({ message: 'Book created successfully', book: item })
					})
			} else {
				res.status(500).send({ message: `Could'nt create the book`, error: error.message })
			}
		})
	}

	static updateBook = (req, res) => {
		const id = req.params.id

		BookModel.findByIdAndUpdate(id, { $set: req.body }, (error, doc) => {
			if (!error) {
				BookModel
					.findById(id)
					.populate('author')
					.exec((error, item) => {
						if (!error) res.status(200).json({ message: `Book updated successfully`, book: item })
					})
			} else {
				res.status(500).json({ message: `Could'nt update book ${id}`, error: error.message })
			}
		})
	}

	static deleteBook = (req, res) => {
		const id = req.params.id

		BookModel.findByIdAndDelete(id, (error) => {
			if (!error) {
				res.status(200).send({ message: `Book deleted successfully` })
			} else {
				res.status(500).json({ message: `Could'nt delete book ${id}`, error: error.message })
			}
		})
	}

	static getBooksByPublishingCompany = (req, res) => {
		const publishingCompany = req.query.publishingCompany

		BookModel.find(
			{ 'publishingCompany': publishingCompany }, {}, (error, books) => {
				res.status(200).json(books)
			}
		)
	}
}

export default BookController