import dotenv from 'dotenv'
dotenv.config();

import server from './src/server.js'
const port = process.env.PORT || 3000

server.listen(port, () => {
	console.info(`\nServer started!`)
	console.info(`http://localhost:${port}/`)
})