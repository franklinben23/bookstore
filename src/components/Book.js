import React from 'react';

const Book = (props) => {
  const {
    title, author, delButton, id,
  } = props;
  return (
    <li className="Book-item">
      title:
      {title}
      {' '}
      Author:
      {author}
      {' '}
      <button type="button" onClick={() => delButton(id)}> delete</button>
    </li>
  );
};

export default Book;
