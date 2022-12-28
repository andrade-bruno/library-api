import dotenv from 'dotenv'
dotenv.config();

import mongoose from "mongoose"

mongoose.connect(process.env.CONNECTION_STRING)

let db = mongoose.connection

export default db