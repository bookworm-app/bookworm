import React, { Component } from "react";
// import { useState } from 'react';
// import OtherCurrentContainer from './OtherCurrentContainer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import InputAdornment from '@mui/material/InputAdornment';
// import Button from '@mui/material/Button';

class CurrentEntry extends Component {
  constructor(props) {
    super(props);

    //any additional state would go here
    //this.state = {value: ''};
    //bind functions

    //this.handleChange = this.handleChange.bind(this);
  }

//   // title= {this.props.current[i].title}
//   // author= {this.props.current[i].author}
//   // genre= {this.props.current[i].genre}
//   //each entry has access to these as props


render() {
  
  return (
    <Box
      component="form"
      // sx={{
      //   '& .MuiTextField-root': { m: 1, width: '25ch' },
      // }}
      noValidate
      autoComplete="off"
    >
    <div>
      {/* <h3>title: {this.props.title }</h3>
      <h3>author: {this.props.author}</h3>
      <h3>genre: {this.props.genre} </h3> */}
      <TextField
          id="outlined-read-only-input"
          label="Title: "
          sx={{ m: 1, width: '25ch' }}
          defaultValue={this.props.title}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Author: "
          sx={{ m: 1, width: '23ch' }}
          defaultValue={this.props.author}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Genre: "
          sx={{ m: 1, width: '23ch' }}
          defaultValue={this.props.genre}
          InputProps={{
            readOnly: true,
          }}
        />
    </div>
    </Box>
  )
}
}

export default CurrentEntry;