import React from 'react';

const Book = (props) => {
  return (
    <li className="Book-item">title: {props.title} Author: {props.author} <button type="button" onClick={() => props.delButton(props.id)}> delete</button></li>
  );
}

export default Book;