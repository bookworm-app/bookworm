import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Button from '@mui/material/Button'

const Signup = () => {
    const [Signedup, setSignedUpState] = useState(false);
    const [message, setMessage] = useState('')
    // const [username, changeUsername] = useInput('');
    // const [password, changePassword] = useInput('');
    // const [email, changeEmail] = useInput('');
   
    const navigate =  useNavigate()
    const routeChange = () => {
        let path = '/'
        if(Signedup){
            path='/home'
        } 
        
        navigate(path);
    }

    //write logic to check if signup is sucessful. if so, set state to true, and navigate to home page
    const Signup = async () => {
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value
        const email = document.querySelector('#email').value
        console.log(username,password,email)
        console.log('sending signup request')
        if(username === ''){setMessage('Please provide a username')} 
        else if(password === ''){setMessage('Please provide a password')}
        else if (email === ''){setMessage('Please provide an email')}
        if(username !=='' && password !== ''){

        const reqBody = {
            method: 'POST',
            header:{
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            })
        }
        //req body with username and password
        try{
        const response = await fetch('/auth/signup',reqBody)
        if (response.status === 200){
            setSignedUpState(true);
            setMessage('Successfully signed up!')

        } else {
            setMessage('sign up failed')
        }
    }
    catch (err){
        console.log(err);
        setMessage('sign up failed')
    }
    }
    }
    
    return (
    <div>
    <h1>Signup</h1>
    <form className = "signup">

    <div><label>Username:</label> <input className = "username" type="text"></input></div>
    <div><label>Password:</label> <input className = "password" type="password"></input></div>
    <div><label>Email:   </label><input className ="email"  type="text"></input></div>
    <label>{message}</label>
       <div className = "signButton"> <Button onClick = {Signup} className= "buttons" size="small" color="secondary" variant="contained">Submit</Button><Button className= "buttons" size="small" color="secondary" variant="contained" onClick={routeChange}>Back</Button></div>
    </form>
    </div>
    //create an input form with a username and password 
        //create a button attached to a post request that will send the username and password to the backend.
        //backend will validate username and password exists in database and send back a 200 status with username in the response object
        //if login is successful, set logged in state to true, navigate to /home route. If login fails, display login failed message to user.
    
    )



}

export default Signup