import { useEffect, useState } from 'react'

import './App.css'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Navbar from './components/nav/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  const [isLoggedIn,setLogin] = useState(()=>{
    const logged = localStorage.getItem('isLoggedIn')
    return logged?true:false
  })
  useEffect(()=>{
  },[isLoggedIn])
  
  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route element={<Home isLoggedIn={isLoggedIn}/>} path='/'> </Route>
        <Route element={<Login isLoggedIn={isLoggedIn} setLogin={()=>{setLogin
              localStorage.setItem('isLoggedIn',isLoggedIn)
        }}/>}  path='/login'> </Route>
        <Route element={<Register isLoggedIn={isLoggedIn} setLogin={()=>{setLogin 
          localStorage.setItem('isLoggedIn',isLoggedIn)}
        }/>} path='/register'> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
