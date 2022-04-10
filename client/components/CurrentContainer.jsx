import React from "react";
import CurrentEntry from './CurrentEntry'
//more imports?

class CurrentContainer extends Component {
  constructor(props) {
    super(props);

    //any additional state would go here
    this.state = {
      added: false
    }
    //bind functions
    this.addBook = this.addBook.bind(this);
  }

//could iterate through the prop objects and set state again

//i have access to prop that passes the objects where user_id is 1 and status is current
  //reading_list._id
  // user_id: 1
  // username
  // book_id
  // title
  // author
  // genre_id
  // genre
  // status_id
  // status: current
  // recommend
  // review
componentDidMount(){
  // const currentEntries = [];
  // for(let i=0; i<this.props.current; i++){
  //   currentEntries.push(
  //     <currentEntry 
  //     title= {this.props.current[i].title}
  //     author= {this.props.current[i].author}
  //     genre= {this.props.current[i].genre}
  //     />
  //   )
  // }
  //iterate through the array of objects (the prop) and set state to the same thing?
}

//entriesDisplay( this.props.current )

//for each object in current prop, 

addBook(){
  if(this.state.added === false){
    this.state.added = true
  }
}

// deleteEntry();
// //this is a function that deletes the entry from the current reads section, also removing it from the DB

// updateEntry();
  //this is a function that moves a book from the current reading list to the have read list

//{ this.state.urls && this.state.urls.map((url, idx) => <FeedItem key={idx} url={url} /> )}

render () {
    
  //const { current, past, future, otherCurrent, otherPast, otherFuture } = this.state;
  const currentEntries = [];

  if(this.state.added === true) {
    currentEntries.push(
      <blankEntry delete={this.state}/>
    )
  }
  for(let i=0; i<this.props.current; i++){
    currentEntries.push(
      <currentEntry 
      title= {this.props.current[i].title}
      author= {this.props.current[i].author}
      genre= {this.props.current[i].genre}
      />
    )
  }
  
  return (
      <div className="currentContainer">
        { this.props.current}
        {/* for each object, render an entry component, pass down the  */}
          <button onClick= {this.addBook} id= 'addButton'>Add Book</button>
          { currentEntries }
      </div>
  )
        
} 

}


export default CurrentContainer;