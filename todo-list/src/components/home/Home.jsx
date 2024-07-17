import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import TodoForm from '../todo/TodoForm'
import Todos from '../todo/Todos'

function Home() {
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    // setTodos(localStorage.getItem('todos'))
  })
  // console.log(localStorage.clear())
  return (
    <div className={style.home}>
        <TodoForm/>
        <hr/>
        <div className={style.todo_section}>
          <Todos todos= {todos}/>
        </div>
    </div>
  )
}

export default Home