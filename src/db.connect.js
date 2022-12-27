import dotenv from 'dotenv'
dotenv.config();

import mongoose from "mongoose"

mongoose.connect(process.env.CONNECTION_STRING)

let db = mongoose.connection

db.on('error', console.error.bind(console, '[failed to connect to mongodb]\n'))
db.once('open', () => console.info('[connected to mongodb]\n'))

export default db