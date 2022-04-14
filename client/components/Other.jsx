import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import Footer from './Footer';

const Other = (props) => {
// --- STATE FOR COMPONENT -------
  const [data, setData] = useState(null);

// ---GET REQUEST FOR ALL BOOKS IN DATABASE
  useEffect(()=>{
    fetch('/books/all/', {
      method: 'GET'
    })
      .then(res => res.json()) 
      .then(res => {
        const bookInfo = Object.values(res);
        setData(bookInfo) 
      })
      .catch(err=>{console.log(err)});
  },[]);

// -------  'OTHER' COMPONENT DISPLAYS... ---------------
  return (
  <div>
    <main id="main">

      <div id="pastBookCard">
        <h2>Past Reads</h2>
        {data && data.map( books =><BookCard key={"book"+ books.readinglistid} books={books} type={'otherpast'}/> )}   
      </div>

      <div id="presentBookCard">
        <h2>Current Reads</h2>
        {data && data.map(books => <BookCard key={"book"+ books.readinglistid} books={books} type={'otherpresent'}/>)}
      </div>

      <div id="futureBookCard">
        <h2>Future Reads</h2>
        {data && data.map(books => <BookCard key={"book"+ books.readinglistid} books={books} type={'otherfuture'} />)} 
      </div>
      
    </main>
    <Footer />
    </div>
  );
};

export default Other;