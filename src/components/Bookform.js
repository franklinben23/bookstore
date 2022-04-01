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
    <div className="form-container">
      <div className="internal-form-container">
        <p className="title-form">ADD NEW BOOK</p>
        <form className="form" onSubmit={formSubmit}>
          <input type="text" placeholder="Book Author" className="author-input" value={title} name="title" onChange={titleTilt} />
          <input type="text" placeholder="Book title" className="title-input" value={author} name="author" onChange={authorTilt} />
          <button type="submit" className="submit-book">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
