import React, { Component } from "react";
import CurrentContainer from './CurrentContainer';
import FutureContainer from './FutureContainer';
import PastContainer from './PastContainer';
import sampleState from './sampleState';
import { createTheme} from '@mui/material/styles';
import {Routes, Route} from 'react-router-dom'
import Button from '@mui/material/Button'

// //more imports?
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#943fb5',
    },
    secondary: {
      main: '#007ef5',
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [],
      past: [],
      future: [],
      otherCurrent: [],
      otherPast: [],
      otherFuture: [],
      
    }
    //any function binding happens here
    this.fetchAll = this.fetchAll.bind(this);
    this.addBookFetch = this.addBookFetch.bind(this);
  }

  
  componentDidMount() {
    // live data
     this.fetchAll();
  }
    // const current = [];
//     const past = [];
//     const future = [];
//     const otherCurrent = [];
//     const otherPast = [];
//     const otherFuture = [];    
//     // // iterate through sampleState data
//     sampleState.forEach(obj => {
//       if(obj.user_id === 1 && obj.status === 'current') {
//         current.push(obj);
//       }
//       else if(obj.user_id === 1 && obj.status === 'past') {
//         past.push(obj)
//         }
//         else if(obj.user_id === 1 && obj.status === 'future') {
//           future.push(obj);
//         }
//         else if(obj.user_id !== 1 && obj.status === 'current') {
//           otherCurrent.push(obj);
//         }
//         else if(obj.user_id !== 1 && obj.status === 'past') {
//           otherPast.push(obj);
//         }
//         else if(obj.user_id !== 1 && obj.status === 'future') {
//           otherFuture.push(obj);
//         }
//       });
// //     // re-render using sampleState data
//     this.setState({ current: current, past: past, future: future, otherCurrent: otherCurrent, otherPast: otherPast, otherFuture: otherFuture});
//   };

  fetchAll() {
    fetch('http://localhost:8080/books/all') //modified to absolute URL
    .then(res =>   res.json())
    .then(data => {
      // create output arrays
      const current = [];
      const past = [];
      const future = [];
      const otherCurrent = [];
      const otherPast = [];
      const otherFuture = [];
      // iterate through data
     
      data.forEach(obj => {
      
        if(obj.userid === 1 && obj.status === 'present') {
          //current reads
          current.push(obj);
        }
        else if(obj.userid === 1 && obj.status === 'past') {
          //past reads
          past.push(obj)
          }
          else if(obj.userid === 1 && obj.status === 'future') {
            //next reads
            future.push(obj);
          }
          else if(obj.userid !== 1 && obj.status === 'present') {
            //what my friends are reading
            otherCurrent.push(obj);
          }
          else if(obj.userid !== 1 && obj.status === 'past') {
            //what my friends have read
            otherPast.push(obj);
          }
          else if(obj.userid !== 1 && obj.status === 'future') {
            //friends next read - not rendered on page
            otherFuture.push(obj);
          }
        });
        // do we need to return this.setState
        // console.log('current', current)
        // console.log(past)
        // console.log(future)
        // console.log(otherCurrent)
        // console.log(otherPast)
        // console.log(otherFuture);
        this.setState({ current: current, past: past, future: future, otherCurrent: otherCurrent, otherPast: otherPast, otherFuture: otherFuture});
      }).catch(err =>  err);

};

addBookFetch(userid, title, author, genre, genreid, status, statusid, recommend, review) {
  console.log(`------> inside of addBookFetch Function`);
  // declare requestBody
  const requestBody = {
      title: title,
      author: author,
      genre: genre,
      genreId: genreid,
      status: status,
      statusId: statusid,
      recommend: recommend,
      review: review
  }
  console.log(`-----> after requestBody declared, ${requestBody}`);
  console.log(`------> userId: ${userid}`);
  fetch(`http://localhost:8080/books/${userid}`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
          'Content-type': 'application/json',
      }
  })
  .then(data => data.json())
  .then(response => {
    // printing response from server
    console.log(`successful addBookFetch request - should get reading list item: ${response}`);
    // fetch request for books/all - that will re-render state
    this.fetchAll();
  
  }).catch(err =>  err);
};


  
//   // code each container and its components and its logic
  
  render () {

    if(this.state.hasError) {
      return <h1>Somthing went wrong with state, hasError</h1>
    };
    
    const { current, past, future, otherCurrent, otherPast, otherFuture } = this.state;
    
    return (
        // <div className="mainContainer">
      <div className= "divInMain">
        <h1>BOOKWORM</h1>
        {/* <Button className= "buttons" size="small" color="secondary" variant="contained">Logout</Button> */}
        <div className= "currentFutureDiv" id= "theDiv">
          <CurrentContainer current={current} otherCurrent={otherCurrent} addBookFetch={this.addBookFetch} />
          <FutureContainer future= {future} otherFuture={otherFuture} addBookFetch={this.addBookFetch}/>
        </div>
        <div className= "pastDiv">
          <PastContainer past={past} otherPast={otherPast} addBookFetch={this.addBookFetch} />
        </div>
      </div>    
    )
  }
}
    
export default App;
