import express from 'express'
import db from './config/db.connect.js'
import routes from './routes/index.js'

db.on('error', console.error.bind(console, '[failed to connect to mongodb]\n'))
db.once('open', () => console.info('[connected to mongodb]\n'))

const server = express()

server.use(express.json())

routes(server)

export default server