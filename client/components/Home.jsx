import {Routes, Route,Link} from 'react-router-dom'
import React from 'react'
import App from './App'
import Login from './Login'
import Signup from './Signup'
import Splash from './Splash'

const Home = () => {
    
    
    return(
     <div>
   
    
    <Routes>
        <Route path='/' element={<Splash/>}/>
        <Route path ='/home' element = {<App/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
        
    </div>
    )
}

export default Home