// import React, { Component } from "react";
// import CurrentContainer from './CurrentContainer';
// import FutureContainer from './FutureContainer';
// import PastContainer from './PastContainer';
// import sampleState from './sampleState';
// import { createTheme } from '@mui/material/styles';
// import '../styles.scss';

// const theme = createTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#943fb5',
//     },
//     secondary: {
//       main: '#007ef5',
//     },
//   },
// });

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       current: [],
//       past: [],
//       future: [],
//       otherCurrent: [],
//       otherPast: [],
//       otherFuture: []
//     }
//     //any function binding happens here
//     this.fetchAll = this.fetchAll.bind(this);
//     this.addBookFetch = this.addBookFetch.bind(this);
//   }

  
//   componentDidMount() {
//     // live data
//     this.fetchAll();
//   }

//   fetchAll() {
//     fetch('./books/all')
//     .then(res => res.json())
//     .then(data => {
//       // create output arrays
//       const current = [];
//       const past = [];
//       const future = [];
//       const otherCurrent = [];
//       const otherPast = [];
//       const otherFuture = [];
//       // iterate through data
//       data.forEach(obj => {
//         if(obj.userid === 1 && obj.status === 'present') {
//           current.push(obj);
//         }
//         else if(obj.userid === 1 && obj.status === 'past') {
//           past.push(obj)
//           }
//           else if(obj.userid === 1 && obj.status === 'future') {
//             future.push(obj);
//           }
//           else if(obj.userid !== 1 && obj.status === 'present') {
//             otherCurrent.push(obj);
//           }
//           else if(obj.userid !== 1 && obj.status === 'past') {
//             otherPast.push(obj);
//           }
//           else if(obj.userid !== 1 && obj.status === 'future') {
//             otherFuture.push(obj);
//           }
//         });
//         // do we need to return this.setState
//         this.setState({ current: current, past: past, future: future, otherCurrent: otherCurrent, otherPast: otherPast, otherFuture: otherFuture});
//       }).catch(err => console.log('Problem with fetchAll method: ERROR:', err));

// };

// addBookFetch(userid, title, author, genre, genreid, status, statusid, recommend, review) {
//   console.log(`------> inside of addBookFetch Function`);
//   // declare requestBody
//   const requestBody = {
//       title: title,
//       author: author,
//       genre: genre,
//       genreId: genreid,
//       status: status,
//       statusId: statusid,
//       recommend: recommend,
//       review: review
//   }
//   console.log(`-----> after requestBody declared, ${requestBody}`);
//   console.log(`------> userId: ${userid}`);
//   fetch(`books/${userid}`, {
//       method: 'POST',
//       body: JSON.stringify(requestBody),
//       headers: {
//           'Content-type': 'application/json',
//       }
//   })
//   .then(data => data.json())
//   .then(response => {
//     // printing response from server
//     console.log(`successful addBookFetch request - should get reading list item: ${response}`);
//     // fetch request for books/all - that will re-render state
//     this.fetchAll();
  
//   }).catch(err => console.log('Problem with fetchAll method: ERROR:', err));
// };
  
// // code each container and its components and its logic
  
//   render () {

//     if(this.state.hasError) {
//       return <h1>Somthing went wrong with state, hasError</h1>
//     };
    
//     const { current, past, future, otherCurrent, otherPast, otherFuture } = this.state;
    
//     return (
//         // <div className="mainContainer">
//       <div className= "divInMain">    
//         <div className= "currentFutureDiv" id= "theDiv">
//           <CurrentContainer current={current} otherCurrent={otherCurrent} addBookFetch={this.addBookFetch}/>
//           <FutureContainer future= {future} otherFuture={otherFuture}/>
//         </div>
//         <div className= "pastDiv">
//           <PastContainer past={past} otherPast={otherPast} />
//         </div>
//       </div>    
//     )
//   }
// };
    
// export default Main;



// ----------- THIS IS THE NEW MAIN CONTAINER ---------------------------------
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Main = (props) => {
// --- STATE FOR MAIN COMPONENT -------
  const [data, setData] = useState(null);

// ---GET REQUEST FOR ALL BOOKS IN DATABASE
  useEffect(()=>{
    fetch('/books/all', {
      method: 'GET'
    })
      .then(res => res.json()) 
      .then(res => {
        const bookInfo = Object.values(res);
        setData(bookInfo)
        console.log(bookInfo[0])
      })
      
      .catch(err=>{console.log(err)})
  },[])

// ------- MAIN COMPONENT DISPLAYS... ---------------
return (
    // <section className='main' id="main">
    //   {data && data.map(books => <BookCard key={"book"+ books.readinglistid} books={books}/>)}
    // </section>
  <main id="main">
    <div id="presentBookCard">
      {data && data.map(books => <BookCard key={"book"+ books.readinglistid} books={books}/>)}
    </div>
    <div id="pastBookCard">
      {data && data.map(books => <BookCard key={"book"+ books.readinglistid} books={books}/>)}
    </div>
    <div id="futureBookCard">
      {data && data.map(books => <BookCard key={"book"+ books.readinglistid} books={books}/>)}
    </div>
  </main>
)
}

export default Main;