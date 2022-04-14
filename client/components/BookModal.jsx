import React, {useState} from 'react';
import '../styles.scss';

const BookModal = props => {

//--------------------Info from API--------------------------------

const title = props.apiBookInfo?.[0];
const author = props.apiBookInfo?.[1][0];
const publisher = props.apiBookInfo?.[2];
const date = props.apiBookInfo?.[3];
const description = props.apiBookInfo?.[4];
const genre = props.apiBookInfo?.[9][0];

  return (
    <div className="bookmodal" id="bookmodal">
      <h2>{title}</h2>
      <ul>
        <p><strong>Author: </strong>{author}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Publisher:</strong> {publisher}</p>   
        <p><strong>Publish Date:</strong> {date}</p>
        <p><strong>Description:</strong> {description}</p>
      </ul>
    </div>
  );
};

export default BookModal;
