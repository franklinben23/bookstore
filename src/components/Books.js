import React, { useState } from "react";
import Book from './Book'
import BookForm from "./Bookform";
import { v4 as uuidv4 } from 'uuid';

const BookList = (props) => {
  return (
      props.books.map((book) => {
        return <Book title={book.title} author={book.author} key={book.id} delButton={() => {props.delButton(book.id)}}/>
      })
  );
};

const Books = () => {
  const [books, setBooks] = useState([]);

  const addBook = (title, author) => {
    const newBook = {id: uuidv4(), title: title, author: author};
    setBooks([...books, newBook]);
  }

  const delBooks = (id) => {
      const newtodos = [...books.filter((book) => book.id !== id)];
      setBooks(newtodos)
  };

  return (
    <>
      <BookList books={books} delButton={delBooks}/>
      <BookForm submitBook={addBook} />
    </>
  );
}

export default Books;