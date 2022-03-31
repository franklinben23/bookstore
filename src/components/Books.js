import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './Bookform';
import { deleteBook } from '../redux/books/books';

const BookList = (props) => (
  props.books.map((book) => <Book title={book.title} author={book.author} key={book.id} delButton={() => { props.delButton(book.id); }} />)
);

const Books = () => {
  const booksArr = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const delBooks = (id) => {
    const bookToDel = deleteBook(id);
    dispatch(bookToDel);
  };

  return (
    <>
      <BookList books={booksArr} delButton={delBooks} />
      <BookForm />
    </>
  );
};

export default Books;
