import mongoose from 'mongoose'

const AuthorSchema = new mongoose.Schema(
	{
		id: {
			type: String
		},
		name: {
			type: String,
			required: true
		},
		nationality: {
			type: String
		}
	},
	{
		versionKey: false
	}
)

const AuthorModel = mongoose.model('authors', AuthorSchema)

export default AuthorModel