import React from "react";
import PastEntry from './PastEntry';

// class OtherPastContainer extends Component{
//     constructor(props){
//         super(props)
//     }
// }
const OtherFutureContainer = ({ otherFuture }) => {
    const otherFutureElements = [];

    // iterate through up to past current entries from other users
    for(let i = 0; i < otherFuture.length; i++) {
        otherFutureElements.push(
            <PastEntry
                title={otherFuture[i].title}
                author={otherFuture[i].author}
                genre={otherFuture[i].genre}
                recommend={otherFuture[i].recommend}
                review={otherFuture[i].review}
            />
        )
    }

    return(
        <div className ='otherFutureContainer'>
            {otherFutureElements}
        </div>
    );
};

export default OtherFutureContainer;