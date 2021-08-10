require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
const app = express()
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("Connected to Database"))


app.use(express.json())

const

    app.listen(3001, () => console.log("Server started"))