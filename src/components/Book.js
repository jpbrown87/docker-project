import React from "react";

const Book = ({ books }) => {
  const bookList = books.length >= 1 ? (
    books.map((book) => {
      return <li className="book" key={book.index}>Title: {book.Book_Title}, Author: {book.Author}, ISBN: {book.ISBN_Number}</li>;
    })
  ) : (
    <li key="message"> There are no books</li>
  );

  return (
    <div>
      <ul>{bookList}</ul>
    </div>
  );
};

// "index": 0,
// "Book_Title": "Xixan",
// "Author": "Burton Clemons",
// "ISBN_Number": "2,544",
// "isCheckedOut": true,
// "Date_Due": ""
export default Book;
