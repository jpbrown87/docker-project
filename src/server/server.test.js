const app = require('./server');
const request = require('supertest')(app);

describe('GET /api/books', () => {
    const booklist =[
        {
          "index": 0,
          "Book_Title": "Xixan",
          "Author": "Burton Clemons",
          "ISBN_Number": "2,544",
          "isCheckedOut": true,
          "Date_Due": ""
        },
        {
          "index": 1,
          "Book_Title": "Entality",
          "Author": "Maxine Fox",
          "ISBN_Number": "3,668",
          "isCheckedOut": true,
          "Date_Due": ""
        },
        {
          "index": 2,
          "Book_Title": "Accidency",
          "Author": "Concetta Barrett",
          "ISBN_Number": "1,287",
          "isCheckedOut": false,
          "Date_Due": ""
        }
    ]
    it('should receive a 200 code from /api/books', () =>{
        //const response = request.get('/api/books')
        console.log(request.get('/api/books'))
        request.get('/api/books').expect(200)
    })
})