import { useState } from 'react'

import './App.css'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Navbar from './components/nav/Navbar'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route Component={Home} path='/'> </Route>
        <Route Component={Login} path='/login'> </Route>
        <Route Component={Register} path='/register'> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
