import React, { useState } from 'react';
//import OtherCurrentContainer from './OtherCurrentContainer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';


function BlankEntry(props) {
  const [title, setTitle] = useState('');
  // const [titleError, setTitleError] = useState(null);
  const handleTitleChange= (event) => {
    setTitle(event.target.value);
  }

  const [author, setAuthor] = useState('');
  // const [authorError, setAuthorError] = useState(null);
  const handleAuthorChange= (event) => {
    setAuthor(event.target.value);
  }

  const [genre, setGenre] = useState('0');
  // const [genreError, setGenreError] = useState(null);
  const handleGenreChange= (event) => {
    setGenre(event.target.value);
  }
  const genres = [
    {
      value: '0',
      label: 'Choose Genre',
    },
    {
      value: '1',
      label: 'Classic',
    },
    {
      value: '2',
      label: 'Comedy',
    },
    {
      value: '3',
      label: 'Mystery',
    },
    {
      value: '4',
      label: 'SciFi/Fantasy',
    },
    {
      value: '5',
      label: 'Historical',
    },
    {
      value: '6',
      label: 'Horror',
    },
    {
      value: '7',
      label: 'Romance',
    },
    {
      value: '8',
      label: 'Western',
    },
    {
      value: '9',
      label: 'Politics',
    },
    {
      value: '10',
      label: 'Fiction',
    },
    {
      value: '11',
      label: 'Non-Fiction',
    },
    {
      value: '12',
      label: 'Children',
    },
    {
      value: '13',
      label: 'Other',
    },
  ];

  const saveBook = () => {
    // if (title === '') setTitleError('required');
    // if (author === '') setAuthorError('required');
    // if (genre === 0) setAuthorError('choose a genre');
    // args: userId=1, title from state, author from state, genre is not needed
    // genreId gets genre from state, status is not needed, statusId=2 for 'present'
    props.addBookFetch(1, title, author, undefined, genre, undefined, 2);
    props.handleCancel();
  }
  
  return(
<Box
      component="form"
      // sx={{
      //   '& .MuiTextField-root': { m: 1, width: '25ch' },
      // }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          color= "secondary"
          label="Title"
          id="addCurrentTitle"
          value={title}
          onChange={handleTitleChange}
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            //startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
        color= "secondary"
          label="Author"
          id="addCurrentTitle"
          value={author}
          onChange={handleAuthorChange}
          sx={{ m: 1, width: '23ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">By:</InputAdornment>,
          }}
        />
        <TextField
        color= "secondary"
          id="outlined-select-currency"
          select
          label="Genre"
          value={genre}
          onChange={handleGenreChange}
          sx={{ m: 1, width: '23ch' }}
          // helperText="Please select your currency"
        >
          {genres.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button className= "buttons" size="small" color="secondary" variant="contained" onClick={saveBook} >Submit</Button>
        <Button className= "buttons" size="small" color="secondary" variant="outlined" onClick={props.handleCancel} >Cancel</Button>
      </div>
      
    </Box>
  ) 
}

export default BlankEntry;
// {/* <Button onClick= {handleCancel} color="secondary" variant="outlined">Cancel</Button> */}
// {/* <div>
//   <Button variant="contained">Submit</Button>
// <Button variant="outlined">Cancel</Button>
// </div> */}
// {/* <form onSubmit= {handleSubmit}>
//   <Button type= "submit" color="secondary" variant="contained">Submit</Button>
// {/* <Button onClick= {handleCancel} color="secondary" variant="outlined">Cancel</Button> */