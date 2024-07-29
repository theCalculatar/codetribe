import React, { useRef, useState } from 'react'
import styles from './todoForm.module.css'

function TodoForm(props) {
    const [todo,setTodo] = useState('')
    const [description, setDescripton] = useState('')
    const [priority, setPriority] = useState(0)

    const todoRef = useRef()
    const desRef = useRef()
    
    const formValidator = () =>{
        let valid = true
        if(validator(todo)){
            todoRef.current.classList.replace('show','hide')
        }else{
            todoRef.current.classList.replace('hide','show')
            valid = false
        }
        if(validator(description)){
            desRef.current.classList.replace('show','hide')
        }else{
            desRef.current.classList.replace('hide','show')
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
        <div className={styles.inputs}>
            <input onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Add todo' />
            <label ref={todoRef} className='error-input hide'>title cannot be empty</label>  
        </div>
        <div className={styles.inputs}>
            <input type="" onChange={(e)=>setDescripton(e.target.value)} placeholder='Description' />
            <label ref={desRef} className='error-input hide'>description cannot be empty</label>
        
        </div>
        <select name="selector" onChange={(e)=>{setPriority(e.target.value)}} id="">
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
        </select>
        <button onClick={formValidator} className={styles.save_button}>Save</button>
    </div>
  )
}

export default TodoForm