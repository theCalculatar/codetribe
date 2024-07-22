import React, { useEffect, useState } from 'react'
import styles from './todo.module.css'
import { RxCross2 } from "react-icons/rx";


function Todos({todos,delTodo,editTodo}) {
  const [title,setTitle] = useState('')
  const [description,setDescripton] = useState('')
  const [index,setIndex] = useState(0)

  const _setTitle = (title,index) =>{
    const _todo = todos
    _todo[title] = title
    setTitle(title)
    setIndex(index)
  }


  useEffect(()=>{
    const timer = setTimeout(()=>{
      title==todos[index]?'':editTodo(title,index)
    },3000)
  
    return () => {clearTimeout(timer)}

  },[title])
  const todoColor = (priority) =>{
    if(priority==0){
      return 'green'
    }else if(priority==1){
      return 'yellow'
    }else return 'red'
  }
  return (
    <div className={styles.container}>
      { todos.map((value,index)=>{
        return <div key={index} className={styles.todo}>
                  <div className={styles.priority} style={{backgroundColor:todoColor(value.priority)}}></div>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <span contentEditable="true" className={styles.title} onKeyDown={(e)=>{
                      _setTitle(e.target.innerHTML,index)
                    }} >{value.todo} 
                    </span>
                    <span contentEditable="true" className={styles.description} onKeyDown={(e)=>setDescripton(e.target.innerHTML,index)}>{value.description}
                    </span>
                  </div>
                  <RxCross2 onClick={()=>delTodo(value)}className={styles.icon}/>
                </div>
        })
      }
    </div>
  )
}

export default Todos