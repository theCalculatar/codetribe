import React, { useState } from 'react'
import styles from './todoForm.module.css'

function TodoForm(props) {
    const [todo,setTodo] = useState('')
    const [description, setDescripton] = useState('')
    const [priority, setPriority] = useState(0)
    
    const formValidator = () =>{
        let valid = true
        if(validator(todo)){
            titleRef.current.classList.replace('show','hide')
        }else{
            titleRef.current.classList.replace('hide','show')
            valid = false
        }
        if(validator(description)){
            albulmRef.current.classList.replace('show','hide')
        }else{
            albulmRef.current.classList.replace('hide','show')
            valid = false
        }
        if(valid){
            addTodo()
        }
    }
    const addTodo = ()=> {
        props.addTodo({todo, description, priority})
    }
    const validator = (value) => {
        const trimedValue = value.trim()
        return !(trimedValue.length<1)
    }

  return (
    <div className={styles.container}>
        <input onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Add todo' />
        <input type="" onChange={(e)=>setDescripton(e.target.value)} placeholder='Description' />
        <select name="selector" onChange={(e)=>{setPriority(e.target.value)}} id="">
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
        </select>
        <button onClick={addTodo} className={styles.save_button}>Save</button>
    </div>
  )
}

export default TodoForm