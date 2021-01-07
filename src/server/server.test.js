const app = require('./server');
const request = require('supertest')(app);


describe('GET /api/books', () => {
    it('should receive a 200 code from /api/books', () =>{
        //const response = request.get('/api/books')        
        request.get('/api/books').expect(200)
    })
  })

  describe('GET /api/books/:bookID', () => {
    const book = 
    {
      "index": 1,
      "Book_Title": "Entality",
      "Author": "Maxine Fox",
      "ISBN_Number": "3,668",
      "isCheckedOut": true,
      "Date_Due": ""
    }
    it('should return a 200 code', () => {
     // const result = request.get('/api/books/1')
      request.get('/api/books/1').expect(200)
    })
  })