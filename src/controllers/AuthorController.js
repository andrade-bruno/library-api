import AuthorModel from "../models/AuthorModel.js"

class AuthorController {
	static getAllAuthors = (req, res) => {
		AuthorModel.find((error, authors) => {
			res.status(200).json(authors)
		})
	}

	static getAuthorById = (req, res) => {
		const id = req.params.id

		AuthorModel.findById(id, (error, author) => {
			if (!error) {
				res.status(200).json(author)
			} else {
				res.status(404).send({ message: `Could'nt find author ${id}`, error: error.message })
			}
		})
	}

	static createAuthor = (req, res) => {
		let author = new AuthorModel(req.body)

		author.save((error) => {
			if (!error) {
				res.status(201).json({ message: 'Author created successfully', author })
			} else {
				res.status(500).send({ message: `Could'nt create the author`, error: error.message })
			}
		})
	}

	static updateAuthor = (req, res) => {
		const id = req.params.id

		AuthorModel.findByIdAndUpdate(id, { $set: req.body }, (error, doc) => {
			if (!error) {
				res.status(200).json({ message: `Author updated successfully` })
			} else {
				res.status(500).json({ message: `Could'nt update author ${id}`, error: error.message })
			}
		})
	}

	static deleteAuthor = (req, res) => {
		const id = req.params.id

		AuthorModel.findByIdAndDelete(id, (error) => {
			if (!error) {
				res.status(200).send({ message: `Author deleted successfully` })
			} else {
				res.status(500).json({ message: `Could'nt delete author ${id}`, error: error.message })
			}
		})
	}
}

export default AuthorController