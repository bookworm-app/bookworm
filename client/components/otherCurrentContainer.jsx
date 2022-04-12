import React from "react";
import CurrentEntry from './CurrentEntry';

const OtherCurrentContainer = ({ otherCurrent }) => {
    const otherCurrentElements = [];

    // this plan is on hold, use current entry
    // NEED TO USE DIFFERENT VERSION OF CURRENT ENTRY - OtherCurrentEntry needs the other user's name
    // THEN IMPORT AND USE THAT COMPONENT INSTEAD

    // iterate through up to 5 past current entries from other users
    for(let i = 0; i < otherCurrent.length; i++) {
        // const { title, author, genre } = otherCurrent[i];
        otherCurrentElements.push(
            <CurrentEntry
                title={otherCurrent[i].title}
                author={otherCurrent[i].author}
                genre={otherCurrent[i].genre}
            />
        )
    }

    return(
        <div className ='otherCurrentContainer'>
            {otherCurrentElements}
        </div>
    );
};

export default OtherCurrentContainer;