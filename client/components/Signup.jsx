import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Button from '@mui/material/Button'

const Signup = () => {
    const [Signedup, setSignedUpState] = useState(false);
    let navigate = useNavigate();
    const routeChange = () => {
        let path=`/`
        navigate(path);
    }
    
    //write logic to check if signup is sucessful. if so, set state to true, and navigate to home page
    
    return (
    <div>
    <h1>Signup</h1>
    <form className = "signup">

    <div><label>Username:</label> <input type="text"></input></div>
    <div><label>Password:</label> <input type="text"></input></div>
    <div><label>Email:   </label><input type="text"></input></div>
       <div className = "signButton"> <Button className= "buttons" size="small" color="secondary" variant="contained">Submit</Button><Button className= "buttons" size="small" color="secondary" variant="contained" onClick={routeChange}>Back</Button></div>
    </form>
    </div>
    //create an input form with a username and password 
        //create a button attached to a post request that will send the username and password to the backend.
        //backend will validate username and password exists in database and send back a 200 status with username in the response object
        //if login is successful, set logged in state to true, navigate to /home route. If login fails, display login failed message to user.
    
    )



}

export default Signup