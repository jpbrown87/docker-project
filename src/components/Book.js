import React from "react";



const Book = ({ books }) => {
  const bookList = books ? (
    books.map((book) => {
      return <li classname="book" key={book}>{book}</li>;
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

export default Book;
