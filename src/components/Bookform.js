import React, { useState } from 'react';

const BookForm = (props) => {
  const { submitBook } = props;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const titleTilt = (e) => {
    setTitle(e.target.value);
  };

  const authorTilt = (e) => {
    setAuthor(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      submitBook(title, author);
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
