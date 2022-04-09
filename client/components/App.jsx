import React from "react";


// import components 

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
        current
    
       
    
    }
  }

/*
this.state= {
  current : [
    {
      id:
      title: 
      author:
      genre:
    }
  ],
  future: [
    {
      id:
      title:
      author:
      genre:
    }
  ],
  past: [
    {
      id:
      title:
      author:
      genre:
      recommended:
      review:
    }
  ],
  otherCurrent: [
    {
    id:
    title:
    author:
    genre:
    }
  ],
  otherFuture: [
    {
      id:
      title:
      author:
      genre:
    }
  ],
  otherPast: [
    {
      id:
      title:
      author:
      genre:
      recommended:
      review:
    }
  ]
}

*/
//array of objects with props that are colomn headers of sql tables

  //component did mount: fetch request to populate state
/*
  // fetch for all specific user info
  //this will arrive in an array of objects, objects correspond to the SQL tables.
  //create an object for each subcomponent, pass this object as a prop
  // const currentComponent = [];
  iterate through data object, add each pertinent property to array
  }
*/

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


// finish initial state setup

// make fetch to server
// write logic to populate each array that will go into newState
// setState

// code each container and its components and its logic

    render () {


        return (
            <div>
                <CurrentContainer />
                <PastContainer />
                <FutureContainer />
            </div>
        )


    }


}



