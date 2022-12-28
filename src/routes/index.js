import express from 'express'
import BooksRouter from './BooksRouter.js'

const routes = (server) => {
	server.route('/').get((req, res) => {
		res.status(200).json({ message: 'Node course with Express and MongoDB'})
	})

	server.use(
		express.json(),
		BooksRouter
	)
}

export default routes