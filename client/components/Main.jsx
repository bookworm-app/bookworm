import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Main = (props) => {
// --- STATE FOR MAIN COMPONENT -------
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

// --------ADD BOOK FUNCTIONALITY---------------
  const addBook = props => {
    console.log('adding book to database with status future')
    // useEffect(()=>{
    //   fetch('/books', {
    //     method: 'POST'
    //   })
    //     .then(res => res.json()) 
    //     .then(res => {
    //       const bookInfo = Object.values(res);
    //       setData(bookInfo) 
    //     })
    //     .catch(err=>{console.log(err)});
    // },[]);
    return (
      <div>
        <h2>Test</h2>
      <BookCard />
      {data && data.map(books => <BookCard key={"book"+ books.readinglistid} books={books} type={'future'} />)} 
    </div>
    )

  }  

// ------- MAIN COMPONENT DISPLAYS... ---------------
  return (
  
    <main id="main">

      <div id="pastBookCard">
        <h2>Past Reads</h2>
        {data && data.map( books =><BookCard key={"book"+ books.readinglistid} books={books} type={'past'}/> )}   
      </div>

      <div id="presentBookCard">
        <h2>Current Reads</h2>
        {data && data.map(books => <BookCard key={"book"+ books.readinglistid} books={books} type={'present'}/>)}
      </div>

      <div id="futureBookCard">
        <h2>Future Reads</h2>
        <button id="addBtn" onClick={addBook}>ADD A BOOK</button>
        {data && data.map(books => <BookCard key={"book"+ books.readinglistid} books={books} type={'future'} />)} 
      </div>
    </main>
  );
};

export default Main;