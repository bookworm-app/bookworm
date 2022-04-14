import {Routes, Route,Link} from 'react-router-dom'
import React from 'react'
import App from './App'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'

const Home = () => {
    
    
    return(
     <div>
    {/* <Navbar/> */}
    <h1>Welcome to Bookworm!</h1>
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
        <nav>
           Please <Link to='/login'>Login</Link> or
            <Link to='/signup'> Signup</Link> to Continue
        </nav>
    </div>
    )
}

export default Home