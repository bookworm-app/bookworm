import React from 'react';
import BookCard from '../components/BookCard';

const PastComponent = props => {
  console.log(props);
  const {title} = props;
  return (
    <div>
      <h3>Past Component</h3>
      <BookCard title={title}/>
    </div>
   
  )
}

export default PastComponent;