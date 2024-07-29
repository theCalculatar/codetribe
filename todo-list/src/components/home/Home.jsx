import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import TodoForm from '../todo/TodoForm'
import Todos from '../todo/Todos'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home({isLoggedIn}) {
  const navigate = useNavigate()
  const BASE_URL = 'http://localhost:3001'

  const [todos,setTodos] = useState([])

  const delTodo = async (todo)=>{
    try {
      await axios.delete(`${BASE_URL}/todo/${todo.id}`)
      setTodos(todos.filter(value=>{
        return value!==todo
      }))
    } catch (error) {
      console.log(error)
    }

  }
  const editTodo = async (element,index) =>{
    const _todos = [...todos]
    if(element.todo !== null && element.description !==null){
      (_todos[index] = element)
      try {
        await axios.put(`${BASE_URL}/todo/${element.id}`,element)
        setTodos(_todos)
      } catch (error) {
        console.log(error)
      }
    }
  }
  useEffect(()=>{
    //init cloud data
    const nameless = async ()=>{
      const response = await axios.get(`${BASE_URL}/todo`)
      setTodos(response.data)
      console.log(response.data)
    }
    
    if(!isLoggedIn){
      navigate('/login')
    }else{
      nameless()
    }
},[])


  const addTodos = async ({todo,description,priority}) => {
    try {
      await axios.post(`${BASE_URL}/todo`, {todo:todo,description:description,priority:priority})
    } catch (error) {
      console.log(error)
    }
    setTodos([...todos,{todo:todo,description:description,priority:priority}])
  }

  // useEffect(()=>{
  //   // localStorage.setItem('todos', JSON.stringify(todos))
  //   console.log('here')
  // },[todos])

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