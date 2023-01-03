import dotenv from 'dotenv'
dotenv.config();

import mongoose from "mongoose"

mongoose.connect(process.env.CONNECTION_STRING + process.env.DEFAULT_COLLECTION)

let db = mongoose.connection

export default db