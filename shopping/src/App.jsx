import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './store/counterSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

export default function Counter() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='' element={ (<div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          </div>
        </div>)}>
      </Route> */}
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

    </Routes>
    
    </BrowserRouter>

  )
}