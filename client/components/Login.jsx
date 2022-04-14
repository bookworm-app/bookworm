import React, { useState } from 'react'


const Login = () => {
    const [Loggedin, setLoggedInState] = useState(false);
    


        //write logic to check if login is successful. if so, set state to true, and navigate to home page

        const loggedIn = async (username,password) => {

            const reqBody = {
                method: 'POST',
                body: {
                    username: username,
                    password: password
                }
            }
            //req body with username and password
            const response = await fetch('/login',reqBody)
            if (response.status === 200){
                setLoggedInState(true);
            }
        }
    return (
    <h1>Login Page</h1>
        //create an input form with a username and password 
        //create a button attached to a post request that will send the username and password to the backend.
        //backend will validate username and password exists in database and send back a 200 status with username in the response object
        //if login is successful, set logged in state to true, navigate to /home route. If login fails, display login failed message to user.

    
    )
}

export default Login