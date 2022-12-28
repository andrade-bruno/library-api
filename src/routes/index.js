import express from 'express'
import booksRouter from './booksRouter.js'

const routes = (server) => {
	server.route('/').get((req, res) => {
		res.status(200).json({ message: 'Node course with Express and MongoDB'})
	})

	server.use(
		express.json(),
		booksRouter
	)
}

export default routes