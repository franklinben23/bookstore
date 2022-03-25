import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import BookForm from './Bookform';

const BookList = (props) => (
  props.books.map((book) => <Book title={book.title} author={book.author} key={book.id} delButton={() => { props.delButton(book.id); }} />)
);

const Books = () => {
  const [books, setBooks] = useState([]);

  const addBook = (title, author) => {
    const newBook = { id: uuidv4(), title, author };
    setBooks([...books, newBook]);
  };

  const delBooks = (id) => {
    const newtodos = [...books.filter((book) => book.id !== id)];
    setBooks(newtodos);
  };

  return (
    <>
      <BookList books={books} delButton={delBooks} />
      <BookForm submitBook={addBook} />
    </>
  );
};

export default Books;
