import React, { useState } from 'react';
import '../styles.scss';
import Button from './Button';
const BookCard = props =>{
// --STATE FOR BOOK COMPONENT
  const { title, status, userid, bookID} = props.books;

  //checks for current reads
if(userid === 1){
  
  if(status === 'present'){ 
// ------------------------------- BOOK COMPONENT DISPLAYS CURRENT READS... --------------------------
  return (
    <main id="bookcard">
      <h2>Current Read</h2>
      <div className ="bookCard">        
        <p className = "bookTitle">Title: {title}</p>
        <Button bookID={bookID} props={props}/>
      </div>
    </main>
  );
  }
  // else if(status === 'past'){
  //   // ------------------------------- BOOK COMPONENT DISPLAYS... --------------------------
  //     return (
  //       <main id="bookcard">
  //         <h2>Past Read</h2>
  //         <div className ="bookCard" id="pastBookCard">
  //           <p className = "bookTitle">Title: {title}</p>
  //         </div>
  //       </main>
  //     );
  //     }
  //     else if(status === 'future'){
  //       // ------------------------------- BOOK COMPONENT DISPLAYS... --------------------------
  //         return (
  //           <main id="bookcard">
  //             <h2>Future Read</h2>
  //             <div className ="bookCard" id="futureBookCard">
  //               <p className = "bookTitle">Title: {title}</p>
  //             </div>
  //           </main>
  //         );
  //         }

      }
};

export default BookCard;