import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
	id: {
		type: String
	},
	title: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Types.ObjectId,
		ref: 'authors',
		required: true,
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

const BookModel = mongoose.model('books', BookSchema)

export default BookModel