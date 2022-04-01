import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './Bookform';
import { deleteBook, getBooks } from '../redux/books/books';

const BookList = (props) => (
  props.books.map((book) => <Book title={book.title} author={book.author} key={book.id} delButton={() => { props.delButton(book.id); }} />)
);

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const booksArr = useSelector((state) => state.books);

  const delBooks = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <BookList books={booksArr} delButton={delBooks} />
      <BookForm />
    </>
  );
};

export default Books;
