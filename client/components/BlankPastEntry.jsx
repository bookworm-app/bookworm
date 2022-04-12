import React, { useState } from 'react';
//import OtherCurrentContainer from './OtherCurrentContainer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';


function BlankPastEntry(props) {

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
  const handleGenreChange= (event) => {
    setGenre(event.target.value);
  }
  const [recommend, setRecommend] = useState('0');
  const handleRecommendChange= (event) => {
    setRecommend(event.target.value)
  }
  const [review, setReview] = useState('');
  const handleReviewChange= (event) => {
    setReview(event.target.value)
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

  const recommendOptions = [
    {
      value: '0',
      label: 'Choose Recommendation'
    },
    {
      value: '1',
      label: 'Would Recommend'
    },
    {
      value: '2',
      label: 'Wouldn\'t Recommend'
    }
  ]
  const saveBook = () => {
    // if (title === '') setTitleError('required');
    // if (author === '') setAuthorError('required');
    // if (genre === 0) setAuthorError('choose a genre');
    // args: userId=1, title from state, author from state, genre is not needed
    // genreId gets genre from state, status is not needed, statusId=2 for 'present'
    let recommendArg;
    if (recommend === '1') {
      recommendArg = true;
    } else if (recommend === '2') {
      recommendArg = false;
    } else {
      recommendArg = null;
    }
    props.addBookFetch(1, title, author, undefined, genre, undefined, 1, recommend, review);
    //props.handleCancel();
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
          id="addCurrentAuthor"
          value={author}
          onChange={handleAuthorChange}
          sx={{ m: 1, width: '23ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">By:</InputAdornment>,
          }}
        />
        <TextField
        color= "secondary"
          id="outlined-select-genre"
          select
          label="Genre"
          sx={{ m: 1, width: '23ch' }}
          value={genre}
          // onChange={handleChange}
          onChange={handleGenreChange}
          // helperText="Please select your currency"
        >
          {genres.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        color= "secondary"
          id="outlined-select-recommend"
          select
          label="Recommend"
          sx={{ m: 1, width: '20ch' }}
          value={recommend}
          onChange={handleRecommendChange}
          // helperText="Please select your currency"
        >
          {recommendOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          color= "secondary"
          label="Review"
          sx={{ m: 1, width: '50ch' }}
          id="addPastReview"
          multiline
          maxRows = {4}
          value={review}
          onChange={handleReviewChange}
          // sx={{ m: 1, width: '27ch' }}
          InputProps={{
            //startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />

        <Button size="small" color="secondary" variant="contained">Submit</Button>
        <Button size="small" color="secondary" variant="outlined" onClick={props.handleCancel} >Cancel</Button>
      </div>
      
    </Box>
  ) 
}

export default BlankPastEntry;