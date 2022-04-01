import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const {
    title, author, delButton, id, category
  } = props;
  
  const progress = 66;
  return (
    <div className="card-container">
      <div className="book-info">
        <p className="category">
          {category}
        </p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="button-container">
          <button type="button" className="comments">Comments</button>
          <button type="button" className="remove" onClick={() => delButton(id)}> delete</button>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circle-progress">
          <CircularProgressbar value={progress} />
        </div>
        <div className="percentage-container">
          <p className="percentage">64%</p>
          <p className="status">Completed</p>
        </div>
      </div>
      <div className="chapter-container">
        <p className="chapter-title">CURRENT CHAPTER</p>
        <p className="chapter-name">Chapter 17</p>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
