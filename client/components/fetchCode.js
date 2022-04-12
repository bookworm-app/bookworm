

// FETCH REQUESTS


// bind section
// ROUTE: /books
this.fetchAll = this.fetchAll.bind(this);
this.addBookFetch = this.addBookFetch.bind(this);
this.moveBookFetch = this.moveBookFetch.bind(this);
this.deleteBookFetch = this.deleteBookFetch.bind(this);
// ROUTE: /reviews
this.updateReviewFetch = this.updateReviewFetch.bind(this);
this.deleteReviewFetch = this.deleteReviewFetch.bind(this);

// method for fetchAll - triggers re-render
//   fetch request for majority of data from reading list
// no inputs required
// can be used to initially populate this.state at App.jsx
// AND invoked after each change made to the DB (add book, delete book, change of status, adding reviews)


// FETCHES FOR /books!!!!!!-------------------------------------------->

// ROUTE: GET books/all
// response: an array of objects with all the readingList items from all users, and genres, status, book title, author, etc. 


// FETCHALL CODE MIGRATED TO APP JSX
// fetchAll() {
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


// ROUTE: GET books/:id
// No button or functionality associated with this ROUTE at frontend at this time.


//ADDING NEW BOOK

// ROUTE: POST books/:id
// query param "id" = userId
// body: all the items in the requesyBody below
// recommend and review are optional
// response: created reading list item

// HAS BEEN ADDED TO APP JSX
addBookFetch(userid, title, author, genre, genreid, status, statusid, recommend, review) {
    console.log(`------> inside of addBookFetch Function`);
    // declare requestBody
    const requestBody = {
        title: title,
        author: author,
        genre: genre,
        genreid: genreid,
        status: status,
        statusid: statusid,
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

// UPDATE A BOOK'S STATUS (MOVE BOOK FROM ONE READING LIST TO ANOTHER, i.e. from future to current, current to past)
// MOVE BOOK BUTTON

// ROUTE: PATCH books/:id
// query param "id" = readingListId
// body: statusId, recommend
// response: updated reading list item

moveBookFetch(readinglistid, statusid, recommend) {
    console.log('-----> ENTERING moveBookFetch function!!!');

    const requestBody = {
        statusid: statusid,
        recommend: recommend
    };
    console.log(`-----> after requestBody declared, ${requestBody}`);
    console.log(`------> readingListId: ${readinglistid}`);
    fetch(`books/${userid}`, {
        method: 'PATCH',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then(data => data.json())
    .then(response => {
      // printing response from server
      console.log(`successful moveBookFetch request - should get reading list item: ${response}`);
      // fetch request for books/all - that will re-render state
      this.fetchAll();
    
    }).catch(err => console.log('Problem with moveBookFetch method: ERROR:', err));

}


// DELETE A BOOK

// ROUTE: DELETE books/:id 
// query param id is readingListId
// no body required
// response: deleted reading list item

deleteBookFetch(readinglistid) {
    // no body required
    fetch(`books/${readinglistid}`, {
        method: 'DELETE',
        body: {},
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then(data => data.json())
    .then(response => {
        // printing response from server
      console.log(`successful deleteBook request: ${response}`);
      // fetch request for books/all
      this.fetchAll();
    
    }).catch(err => console.log('Problem with deleteBookFetch method: ERROR:', err));
}


// FETCHES FOR /reviews!!!!!!-------------------------------------------->

// ADD AN REVIEW
// ROUTE: PATCH reviews/:id
// query param "id" = readingListId
// body: review as string format
// response: updated reading list item

updateReviewFetch(readinglistid, review) {
    console.log('-----> ENTERING updateReviewFetch function!!!');

    const requestBody = {
        readinglistid: readinglistid,
        review: review
    };
    console.log(`-----> after requestBody declared, ${requestBody}`);
    console.log(`------> readingListId: ${readinglistid}`);
    fetch(`reviews/${readinglistid}`, {
        method: 'PATCH',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then(data => data.json())
    .then(response => {
      // printing response from server
      console.log(`successful updateReviewFetch request - should get reading list item: ${response}`);
      // fetch request for books/all - that will re-render state
      this.fetchAll();
    
    }).catch(err => console.log('Problem with updateReviewFetch method: ERROR:', err));
}

// 

// ROUTE DELETE reviews/:id
// query param "id" = readinglistid
// body: not required
// response: updated reading list item

deleteReviewFetch(readinglistid) {
    // no body required
    fetch(`reviews/${readinglistid}`, {
        method: 'DELETE',
        body: {},
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then(data => data.json())
    .then(response => {
        // printing response from server
      console.log(`successful deleteReviewFetch request: ${response}`);
      // fetch request for books/all
      this.fetchAll();
    
    }).catch(err => console.log('Problem with deleteReviewFetch method: ERROR:', err));
}
