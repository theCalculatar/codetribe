import React, { useEffect } from 'react'
import styles from './todo.module.css'
import { RxCross2 } from "react-icons/rx";


function Todos({todos,delTodo}) {

  const todoColor = (priority) =>{
    if(priority==0){
      return 'green'
    }else if(priority==1){
      return 'yellow'
    }else return 'red'
  }
  return (
    <div className={styles.container}>
      { todos.map((value)=>{
        return <div className={styles.todo}>
                  <div className={styles.priority} style={{backgroundColor:todoColor(value.priority)}}></div>
                  <div>
                    <h4>{value.todo}</h4>
                    <p>{value.description}</p>
                  </div>
                  <RxCross2 onClick={()=>delTodo(value)}className={styles.icon}/>
                </div>
        })
      }
    </div>
  )
}

export default Todos