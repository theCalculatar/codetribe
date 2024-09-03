import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import {initData} from './store/shoppingSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/home/Home'
import axios from 'axios'
import NavBar from './components/nav/Navbar'

export default function App() {
  // const count = useSelector((state) => state.counter.value)
  const BASE_URL = 'http://localhost:3000'
  const dispatch = useDispatch()
  const [inputText, setInput] = useState('')

  useEffect(()=>{
    const getList = async ()=> {
      await axios.get(BASE_URL+'/list')
        .then((shoplist)=>{
          dispatch(initData(shoplist.data))
        })
    }
    getList()
  },[])


  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<div><NavBar setInput={setInput}/><Home input={inputText}/></div>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

    </Routes>
    
    </BrowserRouter>

  )
}