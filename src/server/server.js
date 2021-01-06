const express = require('express')
const app = express()
const port = 3001
const fs = require('fs')


app.use(express.json())

const books = JSON.parse(fs.readFileSync('books.json'));

app.get('/api/books', (req, res) => {res.status(200).send(books)})

module.exports = app;