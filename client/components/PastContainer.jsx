import React, { Component } from "react";
import PastEntry from './PastEntry'
import BlankPastEntry from './BlankPastEntry';
import Button from '@mui/material/Button';
import OtherPastContainer from './OtherPastContainer';

// //more imports?

class PastContainer extends Component {
  constructor(props) {
    super(props);

    //any additional state would go here
    this.state = {
      added: false,
      view: true,
      submit: false,
      cancel: false,
      hidden: true
    }
    //bind functions
    this.addBook = this.addBook.bind(this);
    this.viewOtherCurrent = this.viewOtherCurrent.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
 
//   //could iterate through the prop objects and set state again

//   //i have access to prop that passes the objects where user_id is 1 and status is current
//     //reading_list._id
//     // user_id: 1
//     // username
//     // book_id
//     // title
//     // author
//     // genre_id
//     // genre
//     // status_id
//     // status: current
//     // recommend
//     // review
    
//   // componentDidMount(){
    
//   // }

//   //entriesDisplay( this.props.current )

//   //for each object in current prop, 

  addBook(){
    // if(this.state.added === false){
    //   // this.state.added = true
      this.setState({added: true})
    // }
  }

  viewOtherCurrent(){
    if(this.state.hidden === true) this.setState({ hidden: false });
    else this.setState({ hidden: true });
  }

//   // deleteEntry();
//   // //this is a function that deletes the entry from the current reads section, also removing it from the DB

//   // updateEntry();
//     //this is a function that moves a book from the current reading list to the have read list

//   //{ this.state.urls && this.state.urls.map((url, idx) => <FeedItem key={idx} url={url} /> )}

  // could not get this to work. goal is to collapse blank entry component upon pushing submit
  // handleSubmit(e){
  //   //e.preventDefault();
  //   this.setState({submit: true})
  // }

  handleCancel(e){
    e.preventDefault();
    this.setState({added: false});
  }

  render () {
      
    const { current, past, future, otherCurrent, otherPast, otherFuture, addBookFetch } = this.props;
    const { hidden } = this.state;
    const pastEntries = [];

    // if(this.state.submit === true){
    //   pastEntries.push(
    //     <PastEntry handleSubmit={this.handleSubmit}/>
    //   )
    //   this.state.addBook = false;
    // }
    // this.state.cancel === false
    if(this.state.added === true) {
      pastEntries.push(
        <BlankPastEntry handleCancel={this.handleCancel} addBookFetch={addBookFetch}/>
      ) 
    }
    // handleSubmit= { this.handleSubmit } handleCancel= { this.handleCancel }
  
    for(let i=0; i<this.props.past.length; i++){
      pastEntries.push(
        <PastEntry 
        title= {this.props.past[i].title}
        author= {this.props.past[i].author}
        genre= {this.props.past[i].genre}
        recommend= {this.props.past[i].recommend}
        review= {this.props.past[i].review}
        />
      )
    }

    //console.log(currentEntries);

//     // togging visibility style property of OtherCurrentContainer based on view boolean from local state
//     // let otherCurrentView = { visibility: 'hidden' };
//     // this.state.hidden ? otherCurrentView : otherCurrentView = { visibility: 'hidden' };
    
    return (
        <div className="pastContainer">
          {/* { this.props.current} */}
          {/* for each object, render an entry component, pass down the  */}
          {/* <button onClick= {this.addBook} id= 'addButton'>Add Book</button> */}
          <h2>PAST READS</h2>
          <Button onClick= {this.addBook} className='addBooksButton' id= 'addButton' size="small" color="secondary" variant="contained">Add Book</Button>
          {/* <BlankEntry /> */}
          { pastEntries }
           <div>
             {/* <button onClick={this.viewOtherCurrent} id='viewOtherCurrent' > + </button> */}
             <Button onClick={this.viewOtherCurrent} id='viewOtherCurrent' size="small" color="secondary" variant="contained"> + What My Friends Have Read</Button>
             {/* <label>What My Friends Have Read</label> */}
           </div >
           <div style={{ display: hidden ? "none" : "contents" }}>
             <OtherPastContainer 
                otherPast={this.props.otherPast} 
            />
            
          </div>
          {/* //<h1>hey</h1> */}
        </div>
    )
          
   } 

 }


export default PastContainer;