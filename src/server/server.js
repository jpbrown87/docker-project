const express = require('express')
const app = express()
const port = 3001
const fs = require('fs')
const cors = require('cors')


app.use(express.json())
app.use(cors())

const books = JSON.parse(fs.readFileSync('books.json'));

app.get('/api/books/:bookID', (req, res) => {res.status(200).json(books[req.param.bookID])})

app.get('/api/books', (req, res) => {res.status(200).json(books)})


// app.get('/movies', function(req, res) {
//     knex
//     .select('*')
//     .from('movies')
//     .then(data => res.status(200).json(data))
//     .catch(err =>
//       res.status(404).json({
//         message:
//           'The data you are looking for could not be found. Please try again'
//       })
//     );
//});

app.listen('3001')

module.exports = app;