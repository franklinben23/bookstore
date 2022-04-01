import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const titleTilt = (e) => {
    setTitle(e.target.value);
  };

  const authorTilt = (e) => {
    setAuthor(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addBook(uuidv4(), title, author));
      setTitle('');
      setAuthor('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form className="book-form" onSubmit={formSubmit}>
      <input type="text" placeholder="title" value={title} name="title" onChange={titleTilt} />
      <input type="text" placeholder="author" value={author} name="author" onChange={authorTilt} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
