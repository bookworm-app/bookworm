import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button'


const Login = () => {
    const [Loggedin, setLoggedInState] = useState(false);
    const [message, setMessage ] = useState('')
    const [username, usernameChange] = useState('')
    const [password, passwordChange] = useState('');
    const navigate =  useNavigate()
    const routeChange = () => {
        let path = '/'
        if(Loggedin){
            path='/home'
        } 
        
        navigate(path);
    }

        // write logic to check if login is successful. if so, set state to true, and navigate to home page

        const loggedIn = async () => {
        
            console.log('sending login request')
            if(username === ''){setMessage('Please provide a username')}
            if(password === ''){setMessage('Please provide a password')}
            if(username !=='' && password !== ''){

            const reqBody = {
                method: 'POST',
                header:{
                    'Content-Type': 'Application/JSON'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
            //req body with username and password
            try{
            const response = await fetch('/login',reqBody)
            if (response.status === 200){
                setLoggedInState(true);
                setMessage('Successfully logged in!')

            } else {
                setMessage('Log in failed')
            }
        }
        catch (err){
            console.log(err);

        }
        }
        }
    return (
     <div>
    <h1>Login Page</h1>
    <form className ="signup">
      <div> <label>Username: </label> <input onChange = {usernameChange}type="text" ></input></div>
       <div> <label>Password:</label> <input onChange = {passwordChange} type="text"></input></div>
       <label>{message}</label>
       <div className="signButton"><Button onClick={()=> {loggedIn}}
     className= "buttons" size="small" color="secondary" variant="contained">Submit</Button><Button className= "buttons" size="small" color="secondary" variant="contained" onClick={routeChange} >Back</Button></div>
    </form>
    
    </div>
        //create an input form with a username and password 
        //create a button attached to a post request that will send the username and password to the backend.
        //backend will validate username and password exists in database and send back a 200 status with username in the response object
        //if login is successful, set logged in state to true, navigate to /home route. If login fails, display login failed message to user.

    
    )
}

export default Login