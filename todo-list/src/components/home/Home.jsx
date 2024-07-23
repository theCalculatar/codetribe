import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import TodoForm from '../todo/TodoForm'
import Todos from '../todo/Todos'
import { useNavigate } from 'react-router-dom'

function Home({isLoggedIn}) {
  const navigate = useNavigate()

  const [todos,setTodos] = useState(()=>{
    const local = localStorage.getItem('todos')
    return local?JSON.parse(local):[]
  })

  const delTodo = (todo)=>{
    setTodos(todos.filter(value=>{
      return value!==todo
    }))
  }
  const editTodo = (element,index) =>{
    const _todos = [...todos]
    console.log(element)
    if(element.todo !== null && element.description !==null){
      (_todos[index] = element)
      setTodos(_todos)
    }
  }
  useEffect(()=>{
    if(!isLoggedIn){
        navigate('/login')
    }
})


  const addTodos = ({todo,description,priority}) => {
    setTodos([...todos,{todo:todo,description:description,priority:priority}])
  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log('here')
  },[todos])

  return (
    <div className={style.home}>
        <TodoForm addTodo={addTodos}/>
        <hr/>
        <div className={style.todo_section}>
          <Todos todos= {todos} delTodo={delTodo} editTodo={editTodo}/>
        </div>
    </div>
  )
}

export default Home