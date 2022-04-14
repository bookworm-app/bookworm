import React, { Component } from "react";
import FutureEntry from './FutureEntry';
import BlankEntry from './BlankEntry';
import Button from '@mui/material/Button';
import OtherFutureContainer from './OtherFutureContainer'
//import OtherCurrentContainer from './OtherCurrentContainer';

// //more imports?

class FutureContainer extends Component {
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
    this.viewOtherFuture = this.viewOtherFuture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  viewOtherFuture(){
    if(this.state.hidden === true) this.setState({ hidden: false });
    else this.setState({ hidden: true });
  }

//   // deleteEntry();
//   // //this is a function that deletes the entry from the current reads section, also removing it from the DB

//   // updateEntry();
//     //this is a function that moves a book from the current reading list to the have read list

//   //{ this.state.urls && this.state.urls.map((url, idx) => <FeedItem key={idx} url={url} /> )}

  handleSubmit(e){
    //e.preventDefault();
    this.setState({submit: true})
  }

  handleCancel(e){
    e.preventDefault();
    this.setState({added: false})
  }

  render () {
      
    //const { current, past, future, otherCurrent, otherPast, otherFuture } = this.props;
    // const { hidden } = this.state;
    const futureEntries = [];

    if(this.state.submit === true){
      futureEntries.push(
        <FutureEntry handleSubmit={this.handleSubmit}/>
      )
      this.state.addBook = false;
    }
    // this.state.cancel === false
    if(this.state.added === true) {
      futureEntries.push(
        <BlankEntry handleCancel={this.handleCancel} handleSubmit= {this.handleSubmit}/>
      ) 
    }
    // handleSubmit= { this.handleSubmit } handleCancel= { this.handleCancel }
  
    for(let i=0; i<this.props.future.length; i++){
      futureEntries.push(
        <FutureEntry key={this.props.future[i].readinglistid}
        title= {this.props.future[i].title}
        author= {this.props.future[i].author}
        genre= {this.props.future[i].genre}
        />
      )
    }

    //console.log(currentEntries);

//     // togging visibility style property of OtherCurrentContainer based on view boolean from local state
//     // let otherCurrentView = { visibility: 'hidden' };
//     // this.state.hidden ? otherCurrentView : otherCurrentView = { visibility: 'hidden' };
    const {hidden} = this.state
    return (
        <div className="futureContainer">
          {/* { this.props.current} */}
          {/* for each object, render an entry component, pass down the  */}
          {/* <button onClick= {this.addBook} id= 'addButton'>Add Book</button> */}
          <h2>NEXT READS</h2>
          <Button onClick= {this.addBook} className='addBooksButton' id= 'addButton' size="small" color="secondary" variant="contained">Add Book</Button>
          {/* <BlankEntry /> */}
          { futureEntries }
           <div>
               <Button onClick={this.viewOtherFuture} data-testid='FutureButton' id='viewOtherFuture' size="small" color="secondary" variant="contained"> + What My Friends Are Reading</Button>
             {/* <label>What My Friends Are Reading</label> */}
           </div >
           <div style={{ display: hidden ? "none" : "contents" }}>
             <OtherFutureContainer 
                otherFuture={this.props.otherFuture} 
            />
            
          </div>
          {/* //<h1>hey</h1> */} 
        </div>
    )
          
   } 

 }


export default FutureContainer;