import {Routes, Route} from 'react-router-dom'
import React from 'react'
import App from './App'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'

const Home = () => {
    return(
     <div>
    <Navbar/>
    <h1>Home Page</h1>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    )
}

export default Home