import React, { Component } from "react";
import CurrentContainer from './CurrentContainer';
import FutureContainer from './FutureContainer';
import PastContainer from './PastContainer';
import sampleState from './sampleState';
import { createTheme } from '@mui/material/styles';

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
      otherFuture: []
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
    fetch('http://localhost:3000/books/all') //modified to absolute URL
    .then(res => res.json())
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
          current.push(obj);
        }
        else if(obj.userid === 1 && obj.status === 'past') {
          past.push(obj)
          }
          else if(obj.userid === 1 && obj.status === 'future') {
            future.push(obj);
          }
          else if(obj.userid !== 1 && obj.status === 'present') {
            otherCurrent.push(obj);
          }
          else if(obj.userid !== 1 && obj.status === 'past') {
            otherPast.push(obj);
          }
          else if(obj.userid !== 1 && obj.status === 'future') {
            otherFuture.push(obj);
          }
        });
        // do we need to return this.setState
        this.setState({ current: current, past: past, future: future, otherCurrent: otherCurrent, otherPast: otherPast, otherFuture: otherFuture});
      }).catch(err => console.log('Problem with fetchAll method: ERROR:', err));

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
  fetch(`books/${userid}`, {
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
  
  }).catch(err => console.log('Problem with fetchAll method: ERROR:', err));
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
        <div className= "currentFutureDiv" id= "theDiv">
          <CurrentContainer current={current} otherCurrent={otherCurrent} addBookFetch={this.addBookFetch}/>
          <FutureContainer future= {future} otherFuture={otherFuture}/>
        </div>
        <div className= "pastDiv">
          <PastContainer past={past} otherPast={otherPast} />
        </div>
      </div>    
    )
  }
}
    
export default App;
