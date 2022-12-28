import books from "../models/books.js"

class BookController {
	static getAllBooks = (req, res) => {
		books.find((error, books) => {
			res.status(200).json(books)
		})
	} 
}

export default BookController