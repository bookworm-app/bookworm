import React from 'react'
import {Link} from 'react-router-dom'

const Splash = () => {

    return (
        <div className='splashPage'>
            <h1>Welcome to Bookworm!</h1>
            <nav>
            <Link to='/login'>Login</Link> or
            <Link to='/signup'> Signup</Link> to continue!
            </nav>
        </div>
    )
}

export default Splash