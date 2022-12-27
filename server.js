const http = require('http')
const port = 3000

const routes = {
	'/': 'Main',
	'/books': 'Books list',
	'/authors': 'Authors list',
	'/companies': 'Publishing companies'
}

const server = http.createServer((req, res) => {
	const reqq = req.	query
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end(routes[req.url])
})

server.listen(port, () => {
	console.info(`\nServer started! 😎`)
	console.info(`http://localhost:${port}/\n`)
})