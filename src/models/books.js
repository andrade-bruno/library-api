import mongoose from "mongoose"

const booksSchema = new mongoose.Schema({
	id: {
		type: String
	},
	title: {
		type: String,
		required: true,
	},
	author: {
		name: {
			type: String,
			required: true,
		}
	},
	publishingCompany: {
		type: String,
		required: true,
	},
	pages: {
		type: Number,
		required: false
	}
})

const books = mongoose.model('books', booksSchema)

export default books