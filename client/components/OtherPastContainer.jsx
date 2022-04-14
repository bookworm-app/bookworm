import React from "react";
import PastEntry from './PastEntry';

// class OtherPastContainer extends Component{
//     constructor(props){
//         super(props)
//     }
// }
const OtherPastContainer = ({ otherPast }) => {
    const otherPastElements = [];

    // iterate through up to past current entries from other users
    for(let i = 0; i < otherPast.length; i++) {
        otherPastElements.push(
            <PastEntry
                title={otherPast[i].title}
                author={otherPast[i].author}
                genre={otherPast[i].genre}
                recommend={otherPast[i].recommend}
                review={otherPast[i].review}
            />
        )
    }

    return(
        <div className ='otherPastContainer'>
            {otherPastElements}
        </div>
    );
};

export default OtherPastContainer;