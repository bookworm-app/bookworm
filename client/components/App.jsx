import React, { Component } from "react";
import CurrentContainer from './CurrentContainer';
import FutureContainer from './FutureContainer';
import PastContainer from './PastContainer';
import sampleState from './sampleState';
// //more imports?


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
    // this.fetchAll = this.fetchAll.bind(this);
  }

  
  componentDidMount() {
    // live data
    // this.fetchAll();

    const current = [];
    const past = [];
    const future = [];
    const otherCurrent = [];
    const otherPast = [];
    const otherFuture = [];    
    // // iterate through sampleState data
    sampleState.forEach(obj => {
      if(obj.user_id === 1 && obj.status === 'current') {
        current.push(obj);
      }
      else if(obj.user_id === 1 && obj.status === 'past') {
        past.push(obj)
        }
        else if(obj.user_id === 1 && obj.status === 'future') {
          future.push(obj);
        }
        else if(obj.user_id !== 1 && obj.status === 'current') {
          otherCurrent.push(obj);
        }
        else if(obj.user_id !== 1 && obj.status === 'past') {
          otherPast.push(obj);
        }
        else if(obj.user_id !== 1 && obj.status === 'future') {
          otherFuture.push(obj);
        }
      });
//     // re-render using sampleState data
    this.setState({ current: current, past: past, future: future, otherCurrent: otherCurrent, otherPast: otherPast, otherFuture: otherFuture});
  };

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
//         if(obj.userId === 1 && obj.status === 'current') {
//           current.push(obj);
//         }
//         else if(obj.userId === 1 && obj.status === 'past') {
//           past.push(obj)
//           }
//           else if(obj.userId === 1 && obj.status === 'future') {
//             future.push(obj);
//           }
//           else if(obj.userId !== 1 && obj.status === 'current') {
//             otherCurrent.push(obj);
//           }
//           else if(obj.userId !== 1 && obj.status === 'past') {
//             otherPast.push(obj);
//           }
//           else if(obj.userId !== 1 && obj.status === 'future') {
//             otherFuture.push(obj);
//           }
//         });
//         // do we need to return this.setState
//         this.setState({ current: current, past: past, future: future, otherCurrent: otherCurrent, otherPast: otherPast, otherFuture: otherFuture});
//       }).catch(err => console.log('Problem with fetchAll method: ERROR:', err));

// };

  
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
            
           <CurrentContainer current={current} otherCurrent={otherCurrent}/>
          {/* <PastContainer past={past} otherPast={otherPast} />
          <FutureContainer future= {future} otherFuture={otherFuture}/> */}
        </div>
    )
          
  } 
      
}
    
export default App;

    //reading_list._id
  // user_id
  // username
  // book_id
  // title
  // author
  // genre_id
  // genre
  // status_id
  // status
  // recommend
  // review

    //array of objects with props that are column headers of sql tables
    
      //component did mount: fetch request to populate state
    /*
      // fetch for all specific user info
      //this will arrive in an array of objects, objects correspond to the SQL tables.
      //create an object for each subcomponent, pass this object as a prop
      // const currentComponent = [];
      iterate through data object, add each pertinent property to array
      }
    */