import React, {useState} from 'react';
import '../styles.scss';

const BookModal = props => {
  // const {title, author, publisher, isbn} = props.bookinfo;
  console.log('bookmodaldisplay');
  console.log(props.bookInfo);
  return (
    <div className="bookmodal" id="bookmodal">
      <h2>Book Modal Display</h2>
      <ul>
        <p>Title:</p>
        <p>Author:</p>
        <p>Publisher:</p>
        <p>ISBN:</p>
      </ul>
    </div>
  );
};

export default BookModal;
