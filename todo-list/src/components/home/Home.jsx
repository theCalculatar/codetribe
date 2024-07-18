import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import TodoForm from '../todo/TodoForm'
import Todos from '../todo/Todos'
import { redirect } from 'react-router-dom'

function Home({isLoggedIn}) {
  const [todos,setTodos] = useState(()=>{
    const local = localStorage.getItem('todos')
    return local?JSON.parse(local):[]
  })

  const delTodo = (todo)=>{
    setTodos(todos.filter(value=>{
      return value!==todo
    }))
  }
  useEffect(()=>{
    if(!isLoggedIn){
        redirect('/login')
    }
})


  const addTodos = ({todo,description,priority}) => {
    console.log({todo,description,priority})
    setTodos([...todos,{todo:todo,description:todo,priority:priority}])
  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  return (
    <div className={style.home}>
        <TodoForm addTodo={addTodos}/>
        <hr/>
        <div className={style.todo_section}>
          <Todos todos= {todos} delTodo={delTodo}/>
        </div>
    </div>
  )
}

export default Home